import MiniCard from "@/Components/MiniCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Inertia } from "@inertiajs/inertia";

export default function Home() {
    const handleSelect = (type) => {
        Inertia.get("/records", { type }); // Laravel controller receives 'type' via request
    };
    return (
        <AuthenticatedLayout>
            <div className="flex gap-6 justify-center mt-10">
                <MiniCard title="Savings" onClick={() => handleSelect("SA")} />
                <MiniCard title="Current" onClick={() => handleSelect("CA")} />
            </div>
        </AuthenticatedLayout>
    );
}
