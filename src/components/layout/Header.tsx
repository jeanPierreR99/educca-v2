import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
    { label: "Inicio", href: "home" },
    { label: "Acerca de EDUCCA", href: "about" },
    { label: "Promotores", href: "promotors" },
    { label: "Contenido", href: "content" },
    { label: "Contacto", href: "contact" },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <header className="fixed top-0 px-4 left-0 w-full h-[80px] bg-white shadow-md z-50">
            <div className="max-w-[1425px] mx-auto px-4 md:px-0 h-[80px] flex items-center justify-between">
                {/* Logo */}
                <div className="h-full py-2 w-[140px]">
                    <img src="./logo.png" className="h-full w-full object-contain" alt="Logo" />
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center space-x-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => handleScroll(item.href)}
                            className="text-gray-400 px-4 py-2 hover:text-blue-500 border-b-2 border-transparent hover:border-blue-500 transition"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-blue-600"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
                    } bg-white px-6 shadow-md`}
            >
                <ul className="flex flex-col gap-4">
                    {menuItems.map((item) => (
                        <li key={item.href}>
                            <button
                                onClick={() => {
                                    handleScroll(item.href);
                                    setMenuOpen(false);
                                }}
                                className="block w-full text-left text-gray-400 hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md transition"
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
