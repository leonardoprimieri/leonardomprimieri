import { Resend } from "resend";
import { ContactEmailTemplate } from "~/components/email/contact-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const getInTouchFormData = (await request.json()) as {
    name: string;
    email: string;
    message: string;
  };

  try {
    const { data, error } = await resend.emails.send({
      from: `${getInTouchFormData.email} <onboarding@resend.dev>`,
      to: ["leonardo.p.dev@gmail.com"],
      subject: "Portfolio Contact Form",
      react: ContactEmailTemplate({
        email: getInTouchFormData.email,
        message: getInTouchFormData.message,
        name: getInTouchFormData.name,
      }),
      replyTo: getInTouchFormData.email,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
