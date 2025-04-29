// Navbar.jsx
import { menus } from "@/Components/Menus";
import HoverDropdownMenu from "./HoverDropdown";
export default function Navbar() {
    return (
        <nav className="bg-red-800 p-4">
            <div className="flex space-x-8">
                {menus.map((m) => (
                    <HoverDropdownMenu
                        key={m.label}
                        label={m.label}
                        items={m.items}
                    />
                ))}
            </div>
        </nav>
    );
}
