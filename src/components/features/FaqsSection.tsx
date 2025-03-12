import React, {useState} from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function FaqsSection() {
    const [activeIndices, setActiveIndices] = useState<number[]>([]); // State to keep track of active indices

    const faqs = [
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        {
            question: "Is it accessible?",
            answer: "Yes. It adheres to the WAI-ARIA design pattern.",
        },
        
    ];

    // Function to handle toggling of accordion items
    const handleToggle = (index: number) => {               
        setActiveIndices((prevIndices) =>                   // Toggle the index of the clicked item
            prevIndices.includes(index)                     // If the index is already in the array, remove it
                ? prevIndices.filter((i) => i !== index)    // Else, add it to the array
                : [...prevIndices, index]                   // Set the state with the updated array
        );
    };

    return (
        <div className="w-full mx-auto p-5 md:p-20 bg-gray-800">
            {/* Header */}
            <div>
                <h1 className="header2 text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center mb-14">
                    FREQUENTLY ASKED QUESTIONS
                </h1>
            </div>

            {/* Container for Faqs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                {faqs.map((faq, index) => (
                    <Accordion key={index} type="single" collapsible className="text-grey-100 font-mono">
                        <div className="rounded-lg p-px bg-white bg-gradient-to-b from-halftone-blue to-shadow-blue">
                            <AccordionItem
                                value={`item-${index}`}
                                className={`rounded-lg p-5 ${activeIndices.includes(index) ? 'bg-shadow-blue space-y-4' : 'bg-blue-500'}`}>
                                <AccordionTrigger className="cursor-pointer" onClick={() => handleToggle(index)}>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent>
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
