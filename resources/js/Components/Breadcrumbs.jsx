import { Link } from "@inertiajs/react";

export default function Breadcrumbs({ breadcrumbs }) {
    return (
        <nav className="text-sm text-gray-700 mb-4">
            <ol className="flex items-center space-x-2">
                {/* Static Dashboard link */}
                <li>
                    <Link
                        href="/DigiCur/home"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                        Home
                    </Link>
                </li>

                {/* Arrow separator and dynamic breadcrumbs */}
                {breadcrumbs.map((breadcrumb, index) => (
                    <li key={index} className="flex items-center space-x-2">
                        <span className="text-gray-400">›</span>
                        {breadcrumb.isLink ? (
                            <Link
                                href={breadcrumb.link}
                                className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                                {breadcrumb.label}
                            </Link>
                        ) : (
                            <span className="text-gray-500 font-medium">
                                {breadcrumb.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
