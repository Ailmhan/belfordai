import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import React from "react";

export default function PricingPage() {
  const prices = [
    { plan: "Personal Usage", price: "$2000 per month" },
    { plan: "Medium Business Usage", price: "$8000 per month" },
    { plan: "Big Company Usage", price: "$20000 per month (more than 50,000 calls per day)" },
  ];

  return (
    <div>
      <h1>Prices</h1>
      {prices.map((price, index) => (
        <Card key={index} className="max-w-[400px] my-4">
          <CardHeader>
            <h2>{price.plan}</h2>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{price.price}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
