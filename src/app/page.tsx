"use client";
import axios from "axios";

export default function Home() {
  let data = {
    recipient: "steveola23@gmail.com",
    data: { size: 1, price: 6, type: "lte" },
    order_id: "fglXiHYK1J",
  };
  const createInvoice = async () => {
    await axios
      .post(
        "https://api-sandbox.nowpayments.io/v1/invoice",
        {
          price_amount: 1000,
          price_currency: "usd",
          order_description: JSON.stringify(data),
          order_id:"hello",
          ipn_callback_url: "https://nowpayment-sandbox-test.vercel.app/hello",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "W5N96HH-10GM2YZ-QPGXR0C-VZSAY5F",
          },
        },
      )
      .then((res) => console.log(res.data.id, "\n", res.data))
      .catch((err) => console.log(err));
  };
  const createInvoicePayment = async () => {
    await axios
      .post(
        "https://api-sandbox.nowpayments.io/v1/invoice-payment",
        {
          iid: "4629152584",
          pay_currency: "eth",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "W5N96HH-10GM2YZ-QPGXR0C-VZSAY5F",
          },
        },
      )
      .then((res) => console.log(res.data.id))
      .catch((err) => console.log(err));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="border p-3 rounded-md" onClick={createInvoice}>
        createInvoice
      </button>
      <button className="border p-3 rounded-md" onClick={createInvoicePayment}>
        createInvoicePayment
      </button>
    </main>
  );
}
