import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Records({ accounts, selectedType }) {
    return (
        <AuthenticatedLayout>
            <div className="p-6 max-w-5xl mx-auto m-5">
                <div className="overflow-hidden shadow rounded-lg border border-gray-200">
                    {/* Header inside table card */}
                    <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                        <h1 className="text-lg font-semibold text-gray-800">
                            {selectedType} Accounts
                        </h1>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto m-5">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-white">
                                <tr>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                        Account Number
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                        Current Balance
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {accounts.data.length > 0 ? (
                                    accounts.data.map((acc) => (
                                        <tr
                                            key={acc.id}
                                            className="hover:bg-gray-50"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                {acc.accountNumber}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                ₱
                                                {acc.currentBalance.toLocaleString()}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="2"
                                            className="px-6 py-4 text-center text-gray-500"
                                        >
                                            No accounts found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        {accounts.data.length > 0 && (
                            <Pagination links={accounts.links} />
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
