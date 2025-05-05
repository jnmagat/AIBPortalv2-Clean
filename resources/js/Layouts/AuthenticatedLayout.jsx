import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import Navbar from "@/Components/Navbar";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUpload, faBook } from "@fortawesome/free-solid-svg-icons";
import MobileDropdownMenu from "@/Components/MobileDropdownMenu";
import { menus } from "@/Components/Menus";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [showingMobileMenu, setShowingMobileMenu] = useState(false);

    const toggleMobileMenu = () => setShowingMobileMenu(!showingMobileMenu);

    return (
        <div className="min-h-screen bg-white">
            <nav className="shadow-lg bg-red-800 text-yellow-500">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/dashboard">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-yellow-500" />
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex items-center">
                                <Navbar />
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Link
                                    href={route("digicur.home")}
                                    className="inline-flex items-center rounded-md border border-transparent bg-red-800 px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                >
                                    <FontAwesomeIcon
                                        icon={faBook}
                                        className="h-5 w-5 text-white hover:text-yellow-500"
                                    />
                                </Link>
                            </div>{" "}
                            <div className="relative ms-3">
                                <Link
                                    href={route("files.create")}
                                    className="inline-flex items-center rounded-md border border-transparent bg-red-800 px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                >
                                    <FontAwesomeIcon
                                        icon={faUpload}
                                        className="h-5 w-5 text-white hover:text-yellow-500"
                                    />
                                </Link>
                            </div>
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent bg-red-800 px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faUser}
                                                    className="h-5 w-5 text-white hover:text-yellow-500"
                                                />
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("profile.edit")}
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={toggleMobileMenu}
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingMobileMenu
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingMobileMenu
                                                ? "inline-flex"
                                                : "hidden"
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {showingMobileMenu && (
                    <div className="sm:hidden bg-red-800 text-yellow-500 px-4 py-3">
                        <div className="space-y-1">
                            {" "}
                            {menus.map((m) => (
                                <MobileDropdownMenu
                                    key={m.label}
                                    label={m.label}
                                    items={m.items}
                                />
                            ))}
                            <ResponsiveNavLink href={route("dashboard")}>
                                Dashboard
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route("profile.edit")}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </nav>

            {header && (
                <header className="bg-white shadow">
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
