import { Link } from "@inertiajs/react";

// HoverDropdownMenu component (unchanged)
const HoverDropdownMenu = ({ label, items }) => {
    return (
        <div className="relative group">
            {/* Dropdown Trigger */}
            <span className="cursor-pointer text-white hover:text-yellow-500 focus:text-yellow-500">
                {label}
            </span>

            {/* Dropdown Menu */}
            <div className="w-[250px] absolute left-0 mt-2 bg-red-900 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-50">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-white hover:text-red-900"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HoverDropdownMenu;
