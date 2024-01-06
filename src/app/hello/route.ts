import { Resend } from "resend";

export async function POST(request: Request) {
  //   const body = await req.json();
  const body = await request.json();

  const resend = new Resend("re_N7krBaY6_9yeW9hjppYAm4PPJzQpuLqgU");

  let res = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "sunday.m1701072@st.futminna.edu.ng",
    subject: "Hello World",
    text: JSON.stringify(body),
    // html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  });

  return Response.json(res);
}
