import { useState } from "react";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">

            <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

                <div className="h-20 flex items-center justify-between">

                    {/* Logo / Name */}
                    <a href="#home" className="text-2xl md:text-3xl font-cinzelDec tracking-wider">
                        AAKRITI
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-10">

                        <a href="#home" className="text-sm lg:text-base hover:text-gray-500 transition">
                            Home
                        </a>

                        <a href="#about" className="text-sm lg:text-base hover:text-gray-500 transition">
                            About
                        </a>

                        <a href="#services" className="text-sm lg:text-base hover:text-gray-500 transition" >
                            Services
                        </a>

                        <a href="#testimonials" className="text-sm lg:text-base hover:text-gray-500 transition" >
                            Testimonials
                        </a>

                        <a href="#contact" className="px-5 py-2.5 rounded-full border border-black hover:bg-black hover:text-white transition" >
                            Contact
                        </a>

                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-2xl focus:outline-none" aria-label="Toggle menu" >
                        {menuOpen ? "✕" : "☰"}
                    </button>

                </div>

                {/* Mobile Navigation */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col items-center gap-5 pb-6">

                        <a href="#home" onClick={() => setMenuOpen(false)} className="text-base" >
                            Home
                        </a>

                        <a href="#about" onClick={() => setMenuOpen(false)} className="text-base" >
                            About
                        </a>

                        <a href="#services" onClick={() => setMenuOpen(false)} className="text-base" >
                            Services
                        </a>

                        <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-base" >
                            Testimonials
                        </a>

                        <a href="#contact" onClick={() => setMenuOpen(false)} className="px-6 py-2.5 rounded-full bg-black text-white" >
                            Contact
                        </a>

                    </div>
                )}

            </nav>
        </header>
    );
};

export default Header;

