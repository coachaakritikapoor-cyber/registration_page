import React from "react";
import clientImage from "../assets/client.jpg";

const Stories = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-20 py-16 md:py-24">

            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
                        Transformation
                    </p>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-cinzelDec">
                        A Success Story
                    </h2>
                </div>

                {/* Story Card */}
                <div className="flex flex-col lg:flex-row bg-white rounded-3xl
                                overflow-hidden shadow-lg">

                    {/* Client Image */}
                    <div className="w-full lg:w-2/5 min-h-[350px] lg:min-h-[550px]">
                        <img
                            src={clientImage}
                            alt="Client success story"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Story Content */}
                    <div className="w-full lg:w-3/5 p-8 sm:p-10 md:p-14
                                    flex flex-col justify-center">

                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                            Client Transformation
                        </p>

                        <h3 className="text-2xl sm:text-3xl md:text-4xl
                                       font-cinzelDec mb-6">
                            From Feeling Stuck to Living With Purpose
                        </h3>

                        <p className="text-gray-600 leading-7 mb-6">
                            When Sarah first began her journey, she felt
                            disconnected from herself and struggled with
                            emotional exhaustion and a lack of clarity about
                            the direction of her life.
                        </p>

                        <p className="text-gray-600 leading-7 mb-6">
                            Through our sessions, she began exploring the
                            beliefs, emotional patterns, and experiences that
                            were holding her back. With consistent guidance
                            and self-reflection, she developed a deeper
                            understanding of herself and began making
                            intentional changes in her daily life.
                        </p>

                        {/* Highlight */}
                        <div className="border-l-4 border-gray-800 pl-5 my-4">
                            <p className="text-lg md:text-xl italic text-gray-800">
                                "I finally feel connected to myself again.
                                I have clarity, confidence, and a completely
                                different perspective on my life."
                            </p>

                            <p className="mt-3 font-semibold">
                                — Sarah, Client
                            </p>
                        </div>

                        {/* Results */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

                            <div className="bg-gray-50 rounded-xl p-5 text-center">
                                <h4 className="text-2xl font-semibold font-italiana">
                                    Clarity
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    Greater self-awareness
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-5 text-center">
                                <h4 className="text-2xl font-semibold font-italiana">
                                    Confidence
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    Stronger mindset
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-5 text-center">
                                <h4 className="text-2xl font-semibold font-italiana">
                                    Growth
                                </h4>
                                <p className="text-sm text-gray-500 mt-1">
                                    Positive life changes
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Stories;
