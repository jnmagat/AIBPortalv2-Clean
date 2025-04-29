// MobileDropdownMenu.jsx
import { useState } from "react";
import { Link } from "@inertiajs/react";

export default function MobileDropdownMenu({ label, items }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-red-700">
            <button
                onClick={() => setOpen((v) => !v)}
                className="w-full flex justify-between items-center py-2 text-yellow-500"
            >
                <span>{label}</span>
                <svg
                    className={`h-5 w-5 transform transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {open && (
                <div className="bg-red-700">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-white hover:bg-red-600"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
}
