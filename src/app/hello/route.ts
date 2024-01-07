import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

export async function POST(req: Request) {
  // const {payment_id, payment_status, pay_address, order_description} = await req.json();
  const body = await req.json();
  console.log("this is body", body);
  const resend = new Resend("re_N7krBaY6_9yeW9hjppYAm4PPJzQpuLqgU");
  const { payment_id, order_description } = body;

  console.log(order_description)
  let res = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "sunday.m1701072@st.futminna.edu.ng",
    subject: "Hello World",
    react: EmailTemplate({
      payment_id,
      order_description,
    }),
  });

  return Response.json(res);
}

// {
//   "payment_id": "5745459419",
//   "payment_status": "waiting",
//   "pay_address": "3EZ2uTdVDAMFXTfc6uLDDKR6o8qKBZXVkj",
//   "price_amount": 3999.5,
//   "price_currency": "usd",
//   "pay_amount": 0.17070286,
//   "pay_currency": "btc",
//   "order_id": "RGDBP-21314",
//   "order_description": "Apple Macbook Pro 2019 x 1",
//   "ipn_callback_url": "https://nowpayments.io",
//   "created_at": "2020-12-22T15:00:22.742Z",
//   "updated_at": "2020-12-22T15:00:22.742Z",
//   "purchase_id": "5837122679",
//   "amount_received": null,
//   "payin_extra_id": null,
//   "smart_contract": "",
//   "network": "btc",
//   "network_precision": 8,
//   "time_limit": null,
//   "burning_percent": null,
//   "expiration_estimate_date": "2020-12-23T15:00:22.742Z"
// }
