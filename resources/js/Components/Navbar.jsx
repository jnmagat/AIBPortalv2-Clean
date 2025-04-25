import HoverDropdownMenu from "./HoverDropdown";

const Navbar = () => {
    // Defining the dropdown items for MEM and AIB
    const menuItems1 = [
        { label: "Memorandum Circular", href: "#" },
        { label: "Office Order", href: "#" },
        { label: "Procedures and Manuals", href: "#" },
    ];

    const menuItems2 = [{ label: "Memorandum Circular", href: "#" }];
    const menuItems3 = [{ label: "Memorandum Circular", href: "#" }];
    const menuItems4 = [{ label: "Memorandum Circular", href: "#" }];

    return (
        <nav className="bg-red-800 p-4">
            <div className="flex space-x-8">
                {/* MEM Dropdown */}
                <HoverDropdownMenu label="AMANAH" items={menuItems1} />

                {/* AIB Dropdown */}
                <HoverDropdownMenu label="BSP" items={menuItems2} />

                {/* AIB Dropdown */}
                <HoverDropdownMenu label="CSC" items={menuItems3} />

                {/* AIB Dropdown */}
                <HoverDropdownMenu label="AML" items={menuItems4} />
            </div>
        </nav>
    );
};

export default Navbar;
