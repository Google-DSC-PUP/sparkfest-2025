import { useState, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion.tsx";
import RenderedV3Svg2 from "/svgs/RENDERED_V3 2.svg";
import RenderedV3Svg1 from "/svgs/RENDERED_V3 1.svg";
import React from "react";

function FaqsSection() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]); // State to keep track of active indices
  const [closingIndices, setClosingIndices] = useState<number[]>([]); // State to keep track of closing indices
  const timeoutRefs = useRef<{ [key: number]: NodeJS.Timeout }>({}); // Ref to store timeouts for each index

const faqs = [
    {
      question: "When is Sparkfest 2025?",
      answer: "Sparkfest 2025 starts on May 31, 2025. Online sessions will run from May 31 to June 6, with the final Pitching Day on June 7 at The Globe Tower.",
    },
    {
      question: "Where will Sparkfest 2025 be held?",
      answer: "The online sessions will be conducted virtually from May 31 to June 6, 2025. The Pitching Day will take place at The Globe Tower on June 7, 2025.",
    },
    {
      question: "Who can participate in Sparkfest 2025?",
      answer: "Sparkfest 2025 is open to all university students with an interest in developing innovative tech solutions aligned with the Sustainable Development Goals (SDGs).",
    },
    {
      question: "Do I need to have a team to register?",
      answer: "You can register individually or as a team. Individual participants will have the opportunity to form teams during the initial networking sessions.",
    },
    {
      question: "What are the prizes for the winning teams?",
      answer: "Winners will receive cash prizes, Google swag, mentorship opportunities with industry experts, and potential internship opportunities with our sponsor companies.",
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in Sparkfest 2025 is completely free of charge. We believe in making innovation accessible to all students.",
    },
    {
      question: "What resources will be provided during the hackathon?",
      answer: "Participants will have access to workshops, mentorship sessions, technical resources, Hackathon Kit with design assets, and Google Cloud credits for their projects.",
    },
    {
      question: "How will the projects be evaluated?",
      answer: "Projects will be evaluated based on innovation, technical implementation, alignment with SDGs, presentation quality, and potential impact of the solution.",
    },
    {
      question: "Will transportation be provided for the Pitching Day?",
      answer: "We will not be providing transportation. Participants are responsible for their own transportation to The Globe Tower for the Pitching Day on June 7.",
    },
    {
      question: "How can I prepare for Sparkfest 2025?",
      answer: "We recommend familiarizing yourself with the SDGs, brushing up on your coding skills, exploring potential problem statements, and downloading our Hackathon Kit which contains helpful resources.",
    },
  ];

  // Function to handle toggling with animation delay
  const handleToggle = (index: number) => {
    if (activeIndices.includes(index)) {
      // When closing: add to closing indices, remove from active after delay
      setClosingIndices((prev) => [...prev, index]);

      // Clear any existing timeout for this index
      if (timeoutRefs.current[index]) {
        clearTimeout(timeoutRefs.current[index]);
      }

      // Set new timeout to remove from active indices after animation completes
      timeoutRefs.current[index] = setTimeout(() => {
        setActiveIndices((prev) => prev.filter((i) => i !== index));
        setClosingIndices((prev) => prev.filter((i) => i !== index));
      }, 99);
    } else {
      // When opening: add to active indices immediately
      setActiveIndices((prev) => [...prev, index]);
    }
  };

  return (
    <div className="w-full px-5 md:px-20">
      {/* Medium to Large Screen Header */}
      <div className="hidden md:flex flex-row items-center justify-center mb-14">
        <img src={RenderedV3Svg2} alt="rendered v3" className="size-32" />
        <h1 className="header2 text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <img src={RenderedV3Svg1} alt="rendered v3" className="size-32" />
      </div>

      {/* Small Screen */}
      <div className="flex flex-col items-center justify-center mb-12 md:hidden">
        <h1 className="mobile-headers">FREQUENTLY ASKED</h1>
        <div className="flex justify-center items-center m-[-15px]">
          <span>
            <img src={RenderedV3Svg2} alt="rendered v3" className="size-20" />
          </span>
          <span className="mobile-headers">QUESTIONS</span>
          <span>
            <img src={RenderedV3Svg1} alt="rendered v3" className="size-20" />
          </span>
        </div>
      </div>

      {/* Container for Faqs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="text-grey-100 font-mono"
          >
            <div className="rounded-lg p-px bg-white bg-gradient-to-b from-halftone-blue to-shadow-blue">
              <AccordionItem
                value={`item-${index}`}
                className={`rounded-lg ${
                  activeIndices.includes(index) ||
                  closingIndices.includes(index)
                    ? "bg-shadow-blue"
                    : "bg-blue-500"
                } transition-all duration-200`}
              >
                <AccordionTrigger
                  className="cursor-pointer p-5 hover:underline"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-3 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  );
}

export default FaqsSection;
