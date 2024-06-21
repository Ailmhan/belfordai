'use client'
import { Button, Input } from "@nextui-org/react";
import { useState, ChangeEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Oval } from "react-loader-spinner";

const TryItOutPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState(""); // Renamed from workPlace to companyName
  const [role, setRole] = useState(""); // Added role state
  const [useCase, setUseCase] = useState(""); // Added use case state
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);
  const handleCompanyNameChange = (e: ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value); // Renamed handler
  const handleRoleChange = (e: ChangeEvent<HTMLInputElement>) => setRole(e.target.value); // Added handleRoleChange
  const handleUseCaseChange = (e: ChangeEvent<HTMLInputElement>) => setUseCase(e.target.value); // Added handleUseCaseChange

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const apiKey = "sk-m2c64k29zudbhowab6cbknntzoj2e4bfmp3wgpuit2uoc09gjgvnebh501sxqhsx69"; // Ваш API ключ

    // Проверка формата телефонного номера
    const formattedPhoneNumber = phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`;
    if (!/^\+\d{10,}$/.test(formattedPhoneNumber)) {
      toast("Phone number must be at least 10 digits and include the country code.", { type: "error" });
      setIsSubmitting(false);
      return;
    }

    const task = `BACKGROUND INFO: 
    Your name is Jonathan and you're part of the GTM (Go to market) team at BelfordAI. Your job is to call and qualify inbound leads right after they submit an inquiry on the BelfordAI website. The lead might be surprised that you're calling so soon, given that they just submitted the form. That's okay. If asked, explain that you are an AI phone agent, and that your job is to provide support to Belford AI customers.

    Greeting the Lead

    Answer all inbound calls within 5 minutes of form submission
    Greet the lead in a friendly, upbeat tone
    Introduce yourself by first name and company
    Confirm you are speaking with the lead by referencing the form they filled out
    Thank them for taking the time to reach out to Belford AI
    Qualifying the Lead

    Ask open-ended questions to understand their use case and needs:
    What challenges are you looking to solve with our platform?
    How do you envision using our AI capabilities?
    What is the scale of your potential implementation?
    Listen closely to gauge the quality and viability of the use case
    If details are vague or use case seems small-scale, follow email outreach instructions
    If use case seems high-quality with sizable volume, follow call transfer instructions
    Follow Up Over Email

    If use case appears flimsy or low volume:

    Maintain a warm, helpful tone
    Say you’d be happy to follow up over email to provide more information
    Offer to send product specs, pricing, and a custom demo if helpful
    Thank them again for reaching out and confirm you’ll follow up

    If use case seems high quality with sizable volume:

    Enthusiastically say you have the perfect team member to discuss further
    Confirm you can transfer them directly to move the discussion forward
    Thank them for their time and introduce them quickly to new team member
    Politely wrap up and transfer the call

    EXAMPLE DIALOGUE:
    You: Hey ${name}
    Them: Hi who's this?
    You: This is Jonathan from the GTM team at Belford AI. You just submitted an inquiry?
    Them: Oh hey Jonathan, yeah I did, thanks for following up so soon.
    You: Of course. Could you tell me what prompted you to reach out?
    Them: Definitely. We want to send phone calls to our e-commerce leads. Both to collect feedback and also to offer them promotions for repeat purchases.
    You: That's awesome, I love that use case. How many of these phone calls are you looking to send?
    Them: Probably a few hundred per week to start. And then later, I'd love to send one to every single customer; probably tens of thousands a month.
    You: Okay, perfect. I'd love to connect you with one of my colleagues to offer further support. Could I go ahead and transfer you?
    Them: Yeah that sounds great, go for it.
    You: Okay! Great meeting you ${name}, I'll go ahead and transfer you now
    USES TRANSFER TOOL
    
    INFORMATION ABOUT YOUR PROSPECT:
    * Their name is ${name}
    * Their company's name is ${companyName}
    * Their role is ${role}
    * Their use case is ${useCase}
    `;

    const data = {
      phone_number: formattedPhoneNumber,
      task: task,
      voice: "mason",
      wait_for_greeting: true,
      block_interruptions: true,
      interruption_threshold: 100,
      model: "enhanced",
      temperature: 0.7,
      keywords: [],
      pronunciation_guide: [],
      transfer_phone_number: "+971585013488", // Замените на нужный номер
      language: "en-US",
      record: true,
      metadata: { campaign_id: "1234", source: "web" }
    };

    const options = {
      method: 'POST',
      headers: {
        authorization: apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    console.log("Request Data:", data); // Логируем данные запроса для проверки

    try {
      const response = await fetch("https://api.bland.ai/v1/calls", options);
      const result = await response.json();

      console.log(result); // Логируем ответ сервера для отладки
      if (result.status === "success") {
        toast("Phone call sent!", { type: "success" });
      } else {
        toast("Error dispatching phone call!", { type: "error" });
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
          <h1 className="text-4xl font-bold mb-4">Build, Test & Scale AI Phone Agents</h1>
          <p className="text-lg mb-8">
            Belford is the infrastructure for building AI phone calling applications at scale
          </p>
          <div className="flex gap-4">
            <Button className="bg-green-500">Get Started for Free</Button>
            <Button 
              className="border" 
              as="a" 
              href="mailto:info@lwkcolab.com"
            >
              Talk to Sales Team
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
          <Input
            isClearable
            className="mb-4"
            label="Where do you work?"
            value={companyName}
            onChange={handleCompanyNameChange}
          />
          <Input
            isClearable
            className="mb-4"
            label="What's your role?"
            value={role}
            onChange={handleRoleChange}
          />
          <Input
            isClearable
            className="mb-4"
            label="What's your use case?"
            value={useCase}
            onChange={handleUseCaseChange}
          />
          <Button
            className="bg-green-500 mt-4 flex justify-center items-center"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <Oval
                height={16}
                width={16}
                color="#fff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#fefefe"
                strokeWidth={4}
                strokeWidthSecondary={4}
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
