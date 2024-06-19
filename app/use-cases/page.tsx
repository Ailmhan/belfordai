import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

const NewSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-center text-2xl font-bold mb-8">Let AI do the heavy lifting</h2>

      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 p-4 mx-auto">
        <div>
          <Accordion>
            <AccordionItem
              key="1"
              title={
                <div className="flex items-center">
                  <span className="mr-2">🚀</span> Review calls twice as fast
                </div>
              }
            >
              <p>Ensure sales calls are engaging, balanced, and effective. Review pitches faster and coach sales reps to drive calls that convert.</p>
            </AccordionItem>
            <AccordionItem
              key="2"
              title={
                <div className="flex items-center">
                  <span className="mr-2">👀</span> Focus on the calls that matter
                </div>
              }
            >
              <p>Discover common points of friction in support calls. Coach agents to deliver seamless customer experiences that consistently boost CSAT.</p>
            </AccordionItem>
            <AccordionItem
              key="3"
              title={
                <div className="flex items-center">
                  <span className="mr-2">❤️</span> Learn what customers care about
                </div>
              }
            >
              <p>See the volume of keyword mentions across calls to understand customers' priorities. Visualize conversation trends for deeper business intelligence.</p>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <Card className="h-full">
            <CardHeader className="flex flex-col items-start">
              <h4 className="ml-2">Ticket resolution</h4>
              <p className="ml-2 text-green-500">+34% since Q2</p>
            </CardHeader>
            <CardBody>
              <div className="relative w-full h-64">
                <Image
                  src="/images/ticket-resolution.jpg" // Replace with your actual image path
                  alt="Chart"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewSection;
