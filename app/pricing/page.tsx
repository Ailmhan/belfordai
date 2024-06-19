import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import React from "react";

export default function PricingPage() {
  const prices = [
    {
      plan: "Personal Usage",
      price: "$2000 per month",
      features: [
        "Up to 10,000 calls per day",
        "24/7 customer support",
        "Basic analytics",
      ],
      buttonLabel: "Get Started",
      buttonColor: "success",
    },
    {
      plan: "Medium Business Usage",
      price: "$8000 per month",
      features: [
        "Up to 50,000 calls per day",
        "Priority customer support",
        "Advanced analytics",
      ],
      buttonLabel: "Sign Up",
      buttonColor: "warning",
    },
    {
      plan: "Big Company Usage",
      price: "$20000 per month",
      features: [
        "More than 50,000 calls per day",
        "Dedicated account manager",
        "Full analytics suite",
      ],
      buttonLabel: "Contact Us",
      buttonColor: "primary",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prices.map((price, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center">
              <h2 className="text-2xl font-bold">{price.plan}</h2>
              <p className="text-xl font-semibold text-gray-700">{price.price}</p>
            </CardHeader>
            <Divider />
            <CardBody className="flex flex-col items-center">
              <ul className="mb-4 space-y-2">
                {price.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600">{feature}</li>
                ))}
              </ul>
              <Button
                color={price.buttonColor}
                className="w-full"
                size="lg"
              >
                {price.buttonLabel}
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
