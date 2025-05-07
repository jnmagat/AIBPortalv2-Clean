import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function AccountDocuments({ customer, documents }) {
    return (
        <AuthenticatedLayout>
            <div className="p-6 max-w-6xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">
                        Customer Document View
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column: Customer Details */}
                        <div className="bg-gray-50 border border-gray-200 rounded p-4">
                            <h2 className="text-lg font-semibold mb-2">
                                Customer Details
                            </h2>
                            <p>
                                <strong>Name:</strong> {customer.firstName}{" "}
                                {customer.lastName}
                            </p>
                            <p>
                                <strong>Customer ID:</strong>{" "}
                                {customer.customerID}
                            </p>
                            <p>
                                <strong>Branch:</strong> {customer.branch}
                            </p>
                            <p>
                                <strong>Age:</strong> {customer.age}
                            </p>
                            <p>
                                <strong>Bank Code:</strong> {customer.bankCode}
                            </p>
                        </div>

                        {/* Right Column: Documents */}
                        <div className="bg-gray-50 border border-gray-200 rounded p-4">
                            <h2 className="text-lg font-semibold mb-2">
                                Documents
                            </h2>
                            {documents.length > 0 ? (
                                <table className="min-w-full table-auto">
                                    <thead>
                                        <tr className="bg-gray-100 border-b">
                                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                                Type
                                            </th>
                                            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {documents.map((doc) => (
                                            <tr
                                                key={doc.id}
                                                className="border-b"
                                            >
                                                <td className="px-4 py-2 text-sm text-gray-700">
                                                    {doc.documentType}
                                                </td>
                                                <td className="px-4 py-2 text-sm text-blue-600">
                                                    <a
                                                        href={doc.filePath}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <p className="text-gray-500">
                                    No documents uploaded.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
