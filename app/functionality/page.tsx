import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function FunctionalityPage() {
  return (
    <div className="max-w-screen-xl gap-4 grid grid-cols-12 px-4 mx-auto">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">
            Real-Time Modifications
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/54Yl51mnEttF83c6fZBNv9/41cbdd41a9dd05e710ee861b98ac1a51/integrate_models_into_products_tools_or_operations.jpg?w=640&q=90&fm=webp"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">
            Live Feed and Call Monitoring
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/1og20QPrDYssv1fnRasbXW/af144bf758f510bf28b1c0da911fbcdf/empower_your_entire_workforce_with_enterprise_grade_ai.jpg?w=640&q=90&fm=webp"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">
            1000 calls per on minute
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/9303995f-6ada-40ad-76fbe9bf02ea/79b67763dd00b101bcf1e21eff248aca/robots-that-learn.jpg?w=640&q=90&fm=webp"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-6"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-white font-medium text-2xl">
            Secure Authentication
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/R9V8ddGqzERPQ3b7sXTXt/85cc124200e4c69051f90368f0405fb6/discuss_custom_solutions_for_your_company.jpg?w=640&q=90&fm=webp"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-tiny">
              Add an extra layer of protection to your account with two-factor
              authentication, or use Single Sign-On to login with your existing
              identity provider.
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-6"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <h4 className="text-white/90 font-medium text-xl">
            Advanced Analytics
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/3MKLDFZR051r15geSfWh7t/f43ea9ff29294218daf6cf5289b10810/01_businesses_workload_desktop.png?w=640&q=90&fm=webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <p className="text-tiny text-white/60">
              Track trends in customer communication and team performance, and
              monitor key call metrics all in one place.
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">
            Webhooks and API
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/1qCEfO78yhwFeaBFu3kCd6/b57a627f10f4a353443994ed06453056/ChatGPT_Education.png?w=640&q=90&fm=webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <p className="text-tiny text-white/60">
              Connect our phone system to your everyday tools or build a custom
              workflow.
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">
            IVR and Call Routing
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/1og20QPrDYssv1fnRasbXW/af144bf758f510bf28b1c0da911fbcdf/empower_your_entire_workforce_with_enterprise_grade_ai.jpg?w=640&q=90&fm=webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <p className="text-tiny text-white/60">
              Automatically guide callers to the correct team every time by
              setting up a smart IVR directory or customizing distribution and
              ring rules.
            </p>
          </div>
        </CardFooter>
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <h4 className="text-white font-medium text-large">Extensions</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="https://images.ctfassets.net/kftzwdyauwt9/54Yl51mnEttF83c6fZBNv9/41cbdd41a9dd05e710ee861b98ac1a51/integrate_models_into_products_tools_or_operations.jpg?w=640&q=90&fm=webp"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <p className="text-tiny text-white/60">
              Assign everyone on the team a personalized three-digit extension
              their colleagues can quickly dial.
            </p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
