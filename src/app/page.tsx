"use client";
import axios from "axios";

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
    </main>
  );
}
