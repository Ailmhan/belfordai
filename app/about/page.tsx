import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
} from "@nextui-org/react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Card className="max-w-[700px]">
      <CardHeader className="flex gap-3">
      <Image
          alt="Belford AI"
          height={40}
          src="/images/wolf.png" // Replace with the actual path or URL to your logo
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Belford AI</p>
          <p className="text-small text-default-500">belford.ai</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        Belford AI it is Calling AI solution for business which can make
        thousands cold calls in different languages per minute at one moment
        Also Belford AI have use-case with 24/7 customer support and
        consultation, with transfer function to real-person phone number.
        Belford AI can make API calls to external API systems as CRM and ERP
        system to collect your results data or make as example reservations to
        table in restauran or make a order a meeting to particular time . You
        can customize conversation flow of Call by your own and go to market at
        this day. You can start make a sales today
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://enlightenedminds.io/our-portfolio/next-gen-technologies"
        >
          Powered by NextGenTechnologies
        </Link>
      </CardFooter>
    </Card>
  );
}
