import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { parentName, email, phone, institution, gradeOrAge, message, consent, source } = data;

    if (!parentName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "Missing required fields (Name, Email, or Phone)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, message: "Consent is required to submit the inquiry." },
        { status: 400 }
      );
    }

    // Server-side audit logging of admissions inquiries
    console.log("=== [GES Admissions Enquiry Received] ===");
    console.log({
      timestamp: new Date().toISOString(),
      parentName,
      email,
      phone,
      institution: institution || "Not specified",
      gradeOrAge: gradeOrAge || "N/A",
      message: message || "No extra notes",
      source: source || "Direct Portal",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully. Our admissions team will be in touch shortly.",
        referenceId: `GES-ENQ-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing enquiry submission:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error occurred while submitting." },
      { status: 500 }
    );
  }
}
