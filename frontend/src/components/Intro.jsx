import React from "react";
import coach from "../assets/coach.png";

const Intro = () => {
    return (
        <section className="w-full px-6 sm:px-10 lg:px-20 py-16 md:py-24">

            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
                        Meet Your Coach
                    </p>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-cinzelDec">
                        Who I AM
                    </h2>
                </div>


                {/* Main Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg">

                    {/* Mobile Background Image */}
                    <div
                        className="
                            absolute inset-0 md:hidden
                            bg-cover
                            bg-[center_20%]
                        "
                        style={{
                            backgroundImage: `url(${coach})`,
                        }}
                    >
                        <div className="absolute inset-0 bg-black/55"></div>
                    </div>


                    {/* Content */}
                    <div className="
                        relative z-10
                        flex flex-col md:flex-row
                        items-center
                    ">

                        {/* Text */}
                        <div className="
                            w-full md:w-3/5
                            p-8 sm:p-10 md:p-14 lg:p-16
                            flex flex-col
                            justify-center
                            text-white md:text-black
                        ">

                            <p className="
                                text-sm
                                uppercase
                                tracking-widest
                                text-white/80 md:text-gray-500
                                mb-4
                            ">
                                My Journey
                            </p>

                            <h3 className="
                                text-3xl sm:text-4xl md:text-5xl
                                font-cinzelDec
                                mb-6
                                text-center md:text-left
                            ">
                                A Journey From Within
                            </h3>

                            <p className="
                                text-sm sm:text-base md:text-lg
                                leading-7 md:leading-8
                                text-center md:text-left
                                text-white/90 md:text-gray-600
                            ">
                                Hi, I'm Aakriti. As a Quantum Healing Coach,
                                I help people break through physical and
                                emotional blocks to tap into their body's
                                natural ability to heal.
                            </p>

                            <p className="
                                text-sm sm:text-base md:text-lg
                                leading-7 md:leading-8
                                text-center md:text-left
                                text-white/90 md:text-gray-600
                                mt-5
                            ">
                                For years, I struggled with chronic fatigue,
                                inflammation, and deep emotional burnout that
                                traditional treatments couldn't fix.
                                Everything changed when I began addressing
                                the root cause: the subconscious trauma and
                                energy shifts beneath the physical symptoms.
                            </p>

                            {/* Highlight */}
                            <div className="
                                border-l-4
                                border-white md:border-gray-800
                                pl-5
                                my-7
                            ">
                                <p className="
                                    text-lg md:text-xl
                                    italic
                                    text-white md:text-gray-800
                                ">
                                    "True healing isn't about fighting illness—
                                    it's about creating alignment from within."
                                </p>
                            </div>

                            <p className="
                                text-sm sm:text-base md:text-lg
                                leading-7 md:leading-8
                                text-center md:text-left
                                text-white/90 md:text-gray-600
                            ">
                                By healing from the inside out, my vitality
                                returned. I learned that true healing isn't
                                about fighting illness—it's about aligning
                                your internal energy so health becomes your
                                natural state.
                            </p>

                        </div>


                        {/* Desktop Image */}
                        <div className="
                            hidden md:block
                            w-full md:w-2/5
                            min-h-[500px]
                            self-stretch
                        ">
                            <img
                                src={coach}
                                alt="Aakriti - Quantum Healing Coach"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
};

export default Intro;

