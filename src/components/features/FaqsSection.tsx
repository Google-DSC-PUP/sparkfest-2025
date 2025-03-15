import {useState, useRef} from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import RenderedV3Svg2 from "../../../public/svgs/RENDERED_V3 2.svg"
import RenderedV3Svg1 from "../../../public/svgs/RENDERED_V3 1.svg"

function FaqsSection() {
    const [activeIndices, setActiveIndices] = useState<number[]>([]);   // State to keep track of active indices
    const [closingIndices, setClosingIndices] = useState<number[]>([]); // State to keep track of closing indices
    const timeoutRefs = useRef<{[key: number]: NodeJS.Timeout}>({});    // Ref to store timeouts for each index

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

    // Function to handle toggling with animation delay
    const handleToggle = (index: number) => {
        if (activeIndices.includes(index)) {
            // When closing: add to closing indices, remove from active after delay
            setClosingIndices(prev => [...prev, index]);
            
            // Clear any existing timeout for this index
            if (timeoutRefs.current[index]) {
                clearTimeout(timeoutRefs.current[index]);
            }
            
            // Set new timeout to remove from active indices after animation completes
            timeoutRefs.current[index] = setTimeout(() => {
                setActiveIndices(prev => prev.filter(i => i !== index));
                setClosingIndices(prev => prev.filter(i => i !== index));
            }, 99);
        } else {
            // When opening: add to active indices immediately
            setActiveIndices(prev => [...prev, index]);
        }
    };

    return (
        <div className="w-full p-5 md:p-20 bg-gray-800">
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
                <h1 className="font-mono font-bold text-4xl text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)] text-center">
                    FREQUENTLY ASKED
                </h1>
                <div className="flex justify-center items-center m-[-15px]">
                    <span>
                        <img src={RenderedV3Svg2} alt="rendered v3" className="size-20" />
                    </span>
                    <span className="font-mono font-bold text-4xl text-grey-100 [text-shadow:_0px_4px_4px_rgb(168_64_56_/_1.00)]">QUESTIONS</span>
                    <span>
                        <img src={RenderedV3Svg1} alt="rendered v3" className="size-20" />
                    </span>
                </div>
            </div>

            {/* Container for Faqs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                {faqs.map((faq, index) => (
                    <Accordion key={index} type="single" collapsible className="text-grey-100 font-mono">
                        <div className="rounded-lg p-px bg-white bg-gradient-to-b from-halftone-blue to-shadow-blue">
                            <AccordionItem
                                value={`item-${index}`}
                                className={`rounded-lg p-5 ${
                                    activeIndices.includes(index) || closingIndices.includes(index) 
                                    ? 'bg-shadow-blue space-y-4' 
                                    : 'bg-blue-500'
                                } transition-all duration-200`}>
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