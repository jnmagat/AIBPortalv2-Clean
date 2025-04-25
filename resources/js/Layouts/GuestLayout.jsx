import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-red-900 flex items-center justify-center px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full ">
                {/* Left: Mission and Vision */}
                <div className="space-y-6 text-yellow-500">
                    {/* Mission */}
                    <div className="">
                        <h1 className="text-xl font-bold mb-2">Mission</h1>
                        <p>
                            Amanah Islamic Bank shall provide innovative Shariah
                            compliant banking, financing, and investment
                            products and services ensuring trust and inclusive
                            approach promoting accessible, reliable, and
                            responsive financial systems across the Philippines
                        </p>
                    </div>

                    {/* Vision */}
                    <div>
                        <h1 className="text-xl font-bold mb-2">Vision</h1>
                        <p>
                            By 2028, Amanah Islamic Bank is a premier
                            full-fledged Islamic Financial Institution in the
                            Philippines adhering to the objectives of Shariah
                            and promoting socio-economic development, social
                            equity, and championing resilience and
                            sustainability.
                        </p>
                    </div>
                    {/* Core Values */}
                    <div>
                        <h1 className="text-xl font-bold mb-2">Core Values</h1>
                        <p>
                            Adherence to Shari’ah Principles, Integrity,
                            Competence and Excellence
                        </p>
                    </div>
                </div>

                {/* Right: Logo and Form */}
                <div className="flex items-center justify-center bg-red-900 px-4">
                    <div className="w-full max-w-md bg-gray-500 px-6 py-6 shadow-md rounded-lg">
                        <div className="flex justify-center mb-6">
                            <Link href="/">
                                <ApplicationLogo className="h-20 w-20 fill-current text-white-500" />
                            </Link>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
