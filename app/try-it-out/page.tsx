"use client";
import { Button, Input } from "@nextui-org/react";
import { useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const TryItOutPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.target.value);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const apiKey = "sk-m2c64k29zudbhowab6cbknntzoj2e4bfmp3wgpuit2uoc09gjgvnebh501sxqhsx69"; // Ваш API ключ

    // Проверка формата телефонного номера
    const formattedPhoneNumber = phoneNumber.startsWith("+")
      ? phoneNumber
      : `+${phoneNumber}`;

    if (!/^\+\d{10,}$/.test(formattedPhoneNumber)) {
      toast(
        "Phone number must be at least 10 digits and include the country code.",
        { type: "error" }
      );
      setIsSubmitting(false);
      return;
    }

    const task = `Hi ${name}, this is Jonathan from Belford AI. We provide AI-driven solutions to help businesses automate their customer interactions, including phone calls, messaging, and more. You just submitted an inquiry. Could you tell me what prompted you to reach out?`;

    const data = {
      phone_number: formattedPhoneNumber,
      task: task,
    };

    const options = {
      method: "POST",
      headers: {
        authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    console.log("Request Data:", data); // Логируем данные запроса для проверки

    try {
      const response = await fetch("https://api.bland.ai/v1/calls", options);
      const result = await response.json();

      console.log(result); // Логируем ответ сервера для отладки
      if (response.ok && result.status === "success") {
        toast("Phone call sent!", { type: "success" });
      } else {
        toast(`Error: ${result.message || "Error dispatching phone call!"}`, {
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast("Error dispatching phone call!", { type: "error" });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen pt-4 md:justify-center md:p-4 md:min-h-0">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row w-full max-w-6xl">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">
            Build, Test & Scale AI Phone Agents
          </h1>
          <p className="text-lg mb-8">
            Belford is the infrastructure for building AI phone calling
            applications at scale
          </p>
          <div className="flex gap-4">
            <Button className="bg-green-500"  as="a"  href="mailto:info@lwkcolab.com">Get Started for Free</Button>
            <Button as="a" className="border" href="mailto:info@lwkcolab.com">
              Talk with Sales Team
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center p-6 mt-0 lg:mt-0 lg:ml-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Receive a phone call</h2>
          <Input
            isClearable
            className="mb-4"
            label="What's your name?"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            isClearable
            className="mb-4"
            label="Write a phone number with +?"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <Button
            className="bg-green-500 mt-4 flex justify-center items-center"
            disabled={isSubmitting}
            onClick={handleSubmit}
          >
            {isSubmitting && (
              <Oval
                ariaLabel="oval-loading"
                color="#fff"
                height={16}
                secondaryColor="#fefefe"
                strokeWidth={4}
                strokeWidthSecondary={4}
                visible={true}
                width={16}
                wrapperClass=""
                wrapperStyle={{}}
              />
            )}
            <span className="ml-2">Talk to Belford</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TryItOutPage;
