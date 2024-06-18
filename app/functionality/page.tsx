// app/functionality/page.tsx

import React from 'react';
import FunctionalityLayout from './layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function FunctionalityPage() {
  const features = [
    {
      title: "Easy to create wallet",
      description: "Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam accumsan libero viverra a feugiat libero molestie aenean id scelerisque in integer.",
      icon: faWallet,
      imgSrc: "/path/to/your/image1.png",  // Replace with your image path
    },
    {
      title: "Send & receive any time",
      description: "Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam accumsan libero viverra a feugiat libero molestie aenean id scelerisque in integer.",
      icon: faSyncAlt,
      imgSrc: "/path/to/your/image2.png",  // Replace with your image path
    },
  ];

  return (
    <FunctionalityLayout>
      <h1 className="text-4xl font-bold mb-8 text-center">Fully featured to buy, trade and invest in crypto</h1>
      <div className="flex justify-center mb-10">
        <div className="flex gap-4">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/2 p-4 bg-gray-900 rounded-lg shadow-lg">
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
              <div className="flex items-center gap-4 mt-4">
                <FontAwesomeIcon icon={feature.icon} size="2x" />
                <div>
                  <h2 className="text-2xl font-bold">{feature.title}</h2>
                  <p className="mt-2 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200">
          Browse all features
        </button>
      </div>
    </FunctionalityLayout>
  );
}
