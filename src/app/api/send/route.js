/* import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
 */


import { NextResponse } from "next/server";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Email:", email);
  console.log("Subject:", subject);
  console.log("Message:", message);

  try {
    // Simuler une réponse d'envoi d'email réussie
    const data = {
      message: "Email sent successfully (simulated).",
      emailSentTo: [email],
      subjectSent: subject,
      messageContent: message,
    };

    return NextResponse.json(data);
  } catch (error) {
    // Simuler une réponse d'erreur
    return NextResponse.json({ error: "Failed to send email (simulated)." });
  }
}
