import React, {useState} from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function FaqsSection() {
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

    return (
        <div className="w-full mx-auto p-5 md:p-20 bg-gray-800">
            {/* Header */}
            <div>
                <h1 className="header2 text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center mb-14">
                    Frequently Asked Questions
                </h1>
            </div>

            {/* Container for Faqs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                {faqs.map((faq, index) => (
                    <Accordion key={index} type="single" collapsible className="text-grey-100 font-mono">
                        <div className="rounded-lg p-px bg-white bg-gradient-to-b from-halftone-blue to-shadow-blue">
                            <AccordionItem value={`item-${index}`} className="bg-blue-500 rounded-lg p-5">
                                <AccordionTrigger className="cursor-pointer">{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        </div>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default FaqsSection;
