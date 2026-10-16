import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const routes = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
  { path: "/institutions", name: "institutions" },
  { path: "/institutions/al-shomoukh-international-school", name: "institution-sips" },
  { path: "/institutions/shomoukh-early-childhood-al-mouj", name: "institution-ece" },
  { path: "/philosophy", name: "philosophy" },
  { path: "/news", name: "news" },
  { path: "/careers", name: "careers" },
  { path: "/contact", name: "contact" },
  { path: "/privacy", name: "privacy" },
];

async function runAudit() {
  const screenshotDir = path.join(process.cwd(), "audit-screenshots");
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = [];

  console.log("Starting QA Test Suite...");

  for (const route of routes) {
    const url = `http://localhost:3000${route.path}`;
    console.log(`Checking ${route.name} (${url})...`);

    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    // Test Desktop
    await page.setViewportSize({ width: 1440, height: 900 });
    const response = await page.goto(url, { waitUntil: "networkidle" });
    const status = response?.status() || 0;

    await page.screenshot({
      path: path.join(screenshotDir, `${route.name}-desktop.png`),
      fullPage: false,
    });

    // Test Mobile
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(screenshotDir, `${route.name}-mobile.png`),
      fullPage: false,
    });

    results.push({
      route: route.path,
      name: route.name,
      status,
      errors: pageErrors,
    });
  }

  // Test Interactive Admissions Form Submission
  console.log("Testing Admissions Form submission on /contact...");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("http://localhost:3000/contact", { waitUntil: "networkidle" });

  await page.fill('input[name="parentName"]', "Dr. Ahmed Al Mandhari");
  await page.fill('input[name="email"]', "ahmed.almandhari@example.om");
  await page.fill('input[name="phone"]', "+968 91234567");
  await page.selectOption('select[name="institution"]', { index: 1 });
  await page.fill('input[name="gradeOrAge"]', "Grade 5 (Primary)");
  await page.fill('textarea[name="message"]', "Requesting campus tour and academic curriculum breakdown for upcoming term.");
  await page.check('input[name="consent"]');

  await page.click('button[type="submit"]');

  // Wait for submission response confirmation
  await page.waitForTimeout(1000);
  const successIndicator = await page.locator("text=Thank You. Your Enquiry Has Been Received.").isVisible();

  await page.screenshot({
    path: path.join(screenshotDir, "form-submission-success.png"),
  });

  console.log("Form submission success status:", successIndicator);

  // Test Language Switcher
  console.log("Testing Language switcher to Arabic RTL...");
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });
  await page.click('button:has-text("عربي")');
  await page.waitForTimeout(500);

  const htmlDir = await page.getAttribute("html", "dir");
  const htmlLang = await page.getAttribute("html", "lang");

  await page.screenshot({
    path: path.join(screenshotDir, "homepage-arabic-rtl.png"),
    fullPage: false,
  });

  console.log(`Language toggle verified: dir=${htmlDir}, lang=${htmlLang}`);

  await browser.close();

  console.log("\n=== TEST RUN SUMMARY ===");
  console.log(JSON.stringify(results, null, 2));
  console.log(`Form working: ${successIndicator}`);
  console.log(`RTL active: ${htmlDir === "rtl" && htmlLang === "ar"}`);
}

runAudit().catch(console.error);
