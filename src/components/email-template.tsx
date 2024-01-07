import React from "react";
// {
//     "payment_id": "5745459419",
//     "payment_status": "waiting",
//     "pay_address": "3EZ2uTdVDAMFXTfc6uLDDKR6o8qKBZXVkj",
//     "price_amount": 3999.5,
//     "price_currency": "usd",
//     "pay_amount": 0.17070286,
//     "pay_currency": "btc",
//     "order_id": "RGDBP-21314",
//     "order_description": "Apple Macbook Pro 2019 x 1",
//     "ipn_callback_url": "https://nowpayments.io",
//     "created_at": "2020-12-22T15:00:22.742Z",
//     "updated_at": "2020-12-22T15:00:22.742Z",
//     "purchase_id": "5837122679",
//     "amount_received": null,
//     "payin_extra_id": null,
//     "smart_contract": "",
//     "network": "btc",
//     "network_precision": 8,
//     "time_limit": null,
//     "burning_percent": null,
//     "expiration_estimate_date": "2020-12-23T15:00:22.742Z"
//   }

export default function EmailTemplate({
  payment_id,
  payment_status,
  pay_address,
  price_amount,
  price_currency,
  pay_amount,
  pay_currency,
  order_id,
  order_description,
  created_at,
  updated_at,
  purchase_id,
  amount_received,
  payin_extra_id,
  smart_contract,
  network,
  network_precision,
  time_limit,
  burning_percent,
  expiration_estimate_date,
}: {
  payment_id: string;
  payment_status: string;
  pay_address: string;
  price_amount: string;
  price_currency: string;
  pay_amount: string;
  pay_currency: string;
  order_id: string;
  order_description: string;
  created_at: string;
  updated_at: string;
  purchase_id: string;
  amount_received: string;
  payin_extra_id: string;
  smart_contract: string;
  network: string;
  network_precision: string;
  time_limit: string;
  burning_percent: string;
  expiration_estimate_date: string;
}) {
  return (
    <div className="email-template">
      <h1>Invoice Payment Received: #{payment_id}</h1>
      <p>Here are the details of your invoice payment:</p>
      <p>{JSON.stringify(order_description)}</p>
      <table className="border border-collapse w-full">
        <tr className="flex flex-col">
          <th className="border p-4 text-left bg-gray-200">Payment ID</th>
          <th className="border p-4 text-left bg-gray-200">Payment Status</th>
          <th className="border p-4 text-left bg-gray-200">Payment Amount</th>
          <th className="border p-4 text-left bg-gray-200">Payment Currency</th>
          <th className="border p-4 text-left bg-gray-200">Order ID</th>
          <th className="border p-4 text-left bg-gray-200">
            Order Description
          </th>
          <th className="border p-4 text-left bg-gray-200 hidden sm:table-cell">
            Payment Date
          </th>
          <th className="border p-4 text-left bg-gray-200 hidden sm:table-cell">
            Expiration Estimate Date
          </th>
        </tr>
        <tr className="flex flex-col">
          <td className="border p-4 text-left block sm:table-cell">
            {payment_id}
          </td>
          <td className="border p-4 text-left block sm:table-cell">
            {payment_status}
          </td>
          <td className="border p-4 text-left">{pay_amount}</td>
          <td className="border p-4 text-left">{pay_currency}</td>
          <td className="border p-4 text-left">{order_id}</td>
          <td className="border p-4 text-left">{order_description}</td>
          <td className="border p-4 text-left hidden sm:table-cell">
            {created_at}
          </td>
          <td className="border p-4 text-left hidden sm:table-cell">
            {expiration_estimate_date}
          </td>
        </tr>
      </table>
    </div>
  );
}
