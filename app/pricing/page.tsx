import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import React from "react";

export default function PricingPage() {
  const prices = [
    {
      plan: "Solo Plan",
      prices:"Price: $1500",
      features: [
        "Single user license",
        "Access to all components",
        "Lifetime access",
        "Unlimited projects",
        "Customer support",
        "Free updates",
      ],
    },
    {
      plan: "Startup Plan",
      price: "Price: $5000",
      features: [
        "5 user licenses",
        "Access to all components",
        "Lifetime access",
        "Unlimited projects",
        "Priority tech support",
        "Customer support",
        "Free updates",
      ],
      popular: true,
    },
    {
      plan: "Organization Plan",
      price:"Price: $10,000",
      features: [
        "25 user licenses",
        "Access to all components",
        "Lifetime access",
        "Unlimited projects",
        "Priority tech support",
        "Customer support",
        "Free updates",
      ],
    },
  ];

  return (
<div className="flex flex-col items-center justify-center min-h-screen pt-2 pb-6">
      <h1 className="text-4xl font-bold mb-12">Pricing Plans</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {prices.map((price, index) => (
          <Card
            key={index}
            className={`max-w-[300px] ${
              price.popular ? "border-2 border-purple-500" : "border"
            } p-4 bg-gray-800 rounded-lg shadow-lg`}
          >
        
            <CardHeader>
              <h2 className="text-xl font-bold">{price.plan}</h2>
              <p className="text-2xl font-bold mt-2">{price.price}</p>
            </CardHeader>
            <Divider />
            <CardBody>
              <ul className="mt-4 space-y-2">
                {price.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full bg-green-500 text-white">Buy now</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
