import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

export async function POST(req: Request) {
  const {payment_id, payment_status, pay_address, order_description} = await req.json();
  console.log(await req.json());
  const resend = new Resend("re_N7krBaY6_9yeW9hjppYAm4PPJzQpuLqgU");

  let res = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "sunday.m1701072@st.futminna.edu.ng",
    subject: "Hello World",
    react: EmailTemplate({
      payment_id,
      payment_status,
      pay_address,
      price_amount: "1000",
      price_currency: "USD",
      pay_amount: "0.02",
      pay_currency: "BTC",
      order_id: "ABC-123",
      order_description ,
      created_at: "2024-01-06T20:24:00.000Z",
      updated_at: "2024-01-06T20:25:00.000Z",
      purchase_id: "0987654321",
      amount_received: "0.02",
      payin_extra_id: "null",
      smart_contract: "",
      network: "BTC",
      network_precision: "8",
      time_limit: "null",
      burning_percent: "null",
      expiration_estimate_date: "2024-01-06T21:24:00.000Z",
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
