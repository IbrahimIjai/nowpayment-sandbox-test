"use client";
import axios from "axios";
import EmailTemplate from "@/components/email-template";
export default function Home() {
  const testapi = async () => {
    await axios
      .post(
        "https://api-sandbox.nowpayments.io/v1/invoice",
        {
          price_amount: 3999.5,
          price_currency: "usd",
          order_description: "testing",
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
      <div onClick={testapi}>test api</div>
      <EmailTemplate
        payment_id="1234567890"
        payment_status="confirmed"
        pay_address="1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"
        price_amount="1000"
        price_currency="USD"
        pay_amount="0.02"
        pay_currency="BTC"
        order_id="ABC-123"
        order_description="Some Product x 1"
        created_at="2024-01-06T20:24:00.000Z"
        updated_at="2024-01-06T20:25:00.000Z"
        purchase_id="0987654321"
        amount_received="0.02"
        payin_extra_id="null"
        smart_contract=""
        network="BTC"
        network_precision="8"
        time_limit="null"
        burning_percent="null"
        expiration_estimate_date="2024-01-06T21:24:00.000Z"
      />
    </main>
  );
}
