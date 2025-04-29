import Card from "@/Components/Card";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ files, employees, announcements }) {
    return (
        <AuthenticatedLayout
        // header={
        //     <h2 className="text-xl font-semibold leading-tight text-gray-800">
        //         Dashboard
        //     </h2>
        // }
        >
            <Head title="Dashboard" />
            <div className="">
                <div className="mx-auto ">
                    {/* Red background with centered cards */}
                    {/* Red Background */}
                    <div className="bg-red-900 py-20 relative z-10">
                        <div className="max-w-7xl mx-auto text-center text-white text-2xl font-bold"></div>
                    </div>

                    {/* Cards floating and overlapping into the white background */}
                    <div className="relative z-20 -mt-32">
                        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 md:flex-row">
                            {/* Card 1 */}
                            <Card title="Latest Files" items={files} />

                            {/* Card 2 */}
                            <Card title="Celebrants" items={employees} />

                            {/* Card 3 */}
                            <Card title="Announcements" items={announcements} />
                        </div>
                    </div>
                    <div className="bg-white -mt-11 w-full min-h-[calc(100vh-14rem)]"></div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
