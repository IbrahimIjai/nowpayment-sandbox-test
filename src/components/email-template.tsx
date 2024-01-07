import React from "react";

export default function EmailTemplate({
  payment_id,
  order_description,
}: {
  payment_id: string;
  order_description: string;
}) {
  return (
    <div className="email-template">
      <h1>Invoice Payment Received: #{payment_id}</h1>
      <p>Here are the details of your invoice payment:</p>
      <p>DESC: {JSON.stringify(order_description)}</p>
      <table className="border border-collapse w-full">
        <tr className="flex flex-col">
          <th className="border p-4 text-left bg-gray-200">Payment ID</th>
          <th className="border p-4 text-left bg-gray-200">
            Order Description
          </th>
        </tr>
        <tr className="flex flex-col">
          <td className="border p-4 text-left block sm:table-cell">
            {payment_id}
          </td>
          <td className="border p-4 text-left">{order_description}</td>
        </tr>
      </table>
    </div>
  );
}
