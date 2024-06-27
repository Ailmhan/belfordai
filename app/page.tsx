import React from "react";
import { Card, CardBody, Image } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";

export default function FunctionalityPage() {
  const features = [
    {
      title: "Convert prospects with winning sales calls",
      description:
        "Ensure sales calls are engaging, balanced, and effective. Review pitches faster and coach sales reps to drive calls that convert.",
      image:
        "https://a.storyblok.com/f/157376/1000x401/c8012b3444/set-up-in-seconds-3.png/m/769x0",
    },
    {
      title: "Turn support calls into customer loyalty",
      description:
        "Discover common points of friction in support calls. Coach agents to deliver seamless customer experiences that consistently boost CSAT.",
      image:
        "https://a.storyblok.com/f/157376/1000x401/87b5b724ce/set-up-in-seconds-4.png/m/769x0",
    },
    {
      title: "Gain control over your call review process",
      description:
        "Focus on the words that matter. Search across all calls for key terms and phrases and pinpoint moments that need a deeper review.",
      image:
        "https://a.storyblok.com/f/157376/1000x401/07a67c0fcd/set-up-in-seconds-2.png/m/769x0",
    },
    {
      title: "Coach your team with more context",
      description:
        "Train agents with a clear understanding of past performance, so you can focus on developing the right skills. Drive CSAT and conversion over time as teams have more meaningful conversations.",
      image:
        "https://a.storyblok.com/f/157376/1000x401/31b43f30a5/set-up-in-seconds.png/m/769x0",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Welcome to &nbsp;</h1>
        <h1 className={title({ color: "green" })}>Belford.ai&nbsp;</h1>
        <br />
        <h1 className={title()}>Revolutionizing sales with AI</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Your customer support and revenue grow 24/7/365
        </h2>
      </div>

      <div className="flex gap-3 mb-16">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/try-it-out"
        >
          Try it Out
        </Link>
      </div>

      <div className="mt-48 grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-screen-xl px-4 mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className="h-[400px] flex flex-col">
            <CardBody className="p-6 flex flex-col items-center justify-center text-center">
              <div className="relative w-full h-48 mb-4">
              <Image
                removeWrapper
                alt={feature.title}
                className="mb-4 w-full h-full object-cover"
                src={feature.image}
              />
              </div>
              <h4 className="text-lg font-medium mb-2">{feature.title}</h4>
              <p>{feature.description}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
