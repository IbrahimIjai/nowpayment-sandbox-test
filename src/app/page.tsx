"use client";
import axios from "axios";

export default function Home() {
  const testapi = async () => {
    await axios
      .post("https://api-sandbox.nowpayments.io/v1/payment", {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "9N1SHKR-QJN4BVB-J5CGTM6-2RSW8XA",
        },
      body:{
        "price_amount": 3999.5,
        "price_currency": "usd",
        "pay_currency": "eth",
        "order_description": "testing"
      }
      })
      .then((res) => console.log(res)).catch((err)=>console.log(err));
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div onClick={testapi}>test api</div>
    </main>
  );
}
