import React, { useEffect, useRef, useState } from "react";

const ClientTest = () => {
    const [clientData] = useState([
        {
            id: 1,
            clientName: "John Doe",
            clientImage: "https://via.placeholder.com/150",
            clientTestimonial:
                "This is a great service! Highly recommend to everyone.",
        },
        {
            id: 2,
            clientName: "Jane Smith",
            clientImage: "https://via.placeholder.com/150",
            clientTestimonial:
                "I've never felt better! This service truly transformed my life.",
        },
        {
            id: 3,
            clientName: "Michael Johnson",
            clientImage: "https://via.placeholder.com/150",
            clientTestimonial:
                "Outstanding results! I'm so grateful for the transformation.",
        },
        {
            id: 4,
            clientName: "Emily Davis",
            clientImage: "https://via.placeholder.com/150",
            clientTestimonial:
                "Exceptional care and results! I can't thank you enough.",
        },
        {
            id: 5,
            clientName: "David Wilson",
            clientImage: "https://via.placeholder.com/150",
            clientTestimonial:
                "A life-changing experience! I feel like a new person.",
        },
    ]);

    const scrollRef = useRef(null);
    const animationRef = useRef(null);
    const isInteracting = useRef(false);

    const infiniteData = [...clientData, ...clientData];

    useEffect(() => {
        const container = scrollRef.current;

        if (!container) return;

        const speed = 0.5;

        const animate = () => {
            if (!isInteracting.current) {
                container.scrollLeft += speed;
            }
            const halfWidth = container.scrollWidth / 2;

            if (container.scrollLeft >= halfWidth) {
                container.scrollLeft = container.scrollLeft - halfWidth;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div className="w-full overflow-hidden">

            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto p-4 scrollbar-none touch-pan-x"
                onMouseEnter={() => {
                    isInteracting.current = true;
                }}
                onMouseLeave={() => {
                    isInteracting.current = false;
                }}
                onTouchStart={() => {
                    isInteracting.current = true;
                }}
                onTouchEnd={() => {
                    setTimeout(() => {
                        isInteracting.current = false;
                    }, 1000);
                }}
            >
                {infiniteData.map((card, index) => (
                    <div
                        key={`${card.id}-${index}`}
                        className="
                            w-[300px]
                            sm:w-[350px]
                            md:w-[400px]
                            shrink-0
                            bg-white
                            p-6
                            rounded-xl
                            shadow
                        "
                    >
                        <img
                            src={card.clientImage}
                            alt={card.clientName}
                            className="w-full h-auto rounded-lg mb-4"
                        />

                        <h3 className="text-lg font-semibold font-italiana">
                            {card.clientName}
                        </h3>

                        <p className="text-gray-600 mt-2">
                            {card.clientTestimonial}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClientTest;