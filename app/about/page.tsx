import { Card, Divider } from "@nextui-org/react";
import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center bg-black text-white p-10">
      <Card className="max-w-3xl bg-gray-800 p-6 mb-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-4">INTRODUCTION</h1>
        <p className="text-lg mb-4">
          In this Task, I present my replication of some key components from the NEXT UI LIBRARY. This exercise has helped to highlight my ability to understand and recreate complex User Interface elements accurately, showcasing attention to details as well as providing insights into my design and decision-making skills.
        </p>
        <Divider />
        <h2 className="text-3xl font-bold mt-6 mb-4">PROJECT OVERVIEW</h2>
        <p className="text-lg mb-4">
          The NEXT UI LIBRARY features a range of user-friendly components and elements. Each of these components is important for modern web design. For this project, I was tasked with replicating the following components as well as to implement all interactions.
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Tables Component (Custom cells)</li>
          <li>Usage Tabs (with Photos, Music, and Videos)</li>
          <li>Usage tabs (with icons and photos, videos, and music)</li>
          <li>Card component (with divider, image, and composition)</li>
          <li>Select Component (select dropdown list with usage and different sizes)</li>
          <li>Dropdown component (with icons, description, and section)</li>
          <li>Form Component (Single page log in and sign up form)</li>
          <li>Input fields (Active input field, read-only input field, required input field, start and end content input field)</li>
        </ul>
      </Card>
      <div className="flex justify-around w-full max-w-5xl mt-10">
        <img
          src="https://via.placeholder.com/300"
          alt="Illustration of the project"
          className="rounded shadow-lg"
        />
        <img
          src="https://via.placeholder.com/300"
          alt="Mobile version"
          className="rounded shadow-lg"
        />
      </div>
    </div>
  );
}
