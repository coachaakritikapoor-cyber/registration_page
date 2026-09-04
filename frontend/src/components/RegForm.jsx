import React, { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_URI}/api/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                alert("Registration successful!");
                setFormData({ name: "", email: "", contact: "", });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Unable to register. Please try again.");
        }
    };

    return (
        <section className="w-full px-6 sm:px-10 lg:px-20 py-16 md:py-24">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">
                        Begin Your Journey
                    </p>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-cinzelDec">
                        Register Now
                    </h2>

                    <p className="max-w-xl mx-auto mt-4 text-gray-600">
                        Take the first step towards a deeper connection with
                        yourself. Fill in your details and we'll get in touch
                        with you.
                    </p>
                </div>


                {/* Form Card */}
                <div className="
                    max-w-2xl mx-auto
                    bg-white
                    rounded-3xl
                    shadow-lg
                    p-8 sm:p-10 md:p-14
                ">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Full Name
                            </label>

                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    border border-gray-200
                                    bg-gray-50
                                    outline-none
                                    transition
                                    focus:border-gray-500
                                    focus:bg-white
                                "
                            />
                        </div>


                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email Address
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    border border-gray-200
                                    bg-gray-50
                                    outline-none
                                    transition
                                    focus:border-gray-500
                                    focus:bg-white
                                "
                            />
                        </div>


                        {/* Contact Number */}
                        <div>
                            <label
                                htmlFor="contact"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Contact Number
                            </label>

                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                placeholder="Enter your contact number"
                                required
                                pattern="[0-9]{10}"
                                maxLength="10"
                                className="
                                    w-full
                                    px-4 py-3
                                    rounded-xl
                                    border border-gray-200
                                    bg-gray-50
                                    outline-none
                                    transition
                                    focus:border-gray-500
                                    focus:bg-white
                                "
                            />
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="
                                w-full
                                py-3.5
                                mt-2
                                rounded-xl
                                bg-black
                                text-white
                                font-medium
                                tracking-wide
                                hover:bg-gray-800
                                transition
                                duration-300
                                text-2xl
                                font-italiana
                            "
                        >
                            Register Now
                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
};

export default RegistrationForm;

