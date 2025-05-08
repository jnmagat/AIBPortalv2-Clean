import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { router, usePage } from "@inertiajs/react";
import Breadcrumbs from "@/Components/Breadcrumbs";

export default function AccountList({ accounts, customer }) {
    const { selectedType } = usePage().props;
    const breadcrumbs = [
        {
            label: `${selectedType}`,
            isLink: true,
            link: `/records?type=${selectedType}`, // This takes you back to Savings/Current selection
        },
        {
            label: `${customer.firstName} ${customer.lastName}`,
            isLink: false, // No link on the current page
        },
    ];
    return (
        <AuthenticatedLayout>
            <div className="p-6 max-w-5xl mx-auto m-5">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="overflow-hidden shadow rounded-lg border border-gray-200">
                    {/* Header */}
                    <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
                        <h1 className="text-lg font-semibold text-gray-800">
                            Accounts for {customer.firstName}{" "}
                            {customer.lastName} (ID: {customer.customerID})
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
                                        Account Type
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                        Current Balance
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                        Last Transaction
                                    </th>
                                    <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 uppercase tracking-wider">
                                        Action
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
                                                {acc.accountType}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                ₱{" "}
                                                {acc.currentBalance.toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                {new Date(
                                                    acc.lastTransaction
                                                ).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                <div className="relative group inline-block">
                                                    <FontAwesomeIcon
                                                        key={`${acc.customerID}-${acc.accountNumber}`}
                                                        id={`${acc.customerID}-${acc.accountNumber}`}
                                                        icon={faFile}
                                                        onClick={() =>
                                                            router.get(
                                                                `/customers/${customer.customerID}/accounts/${acc.accountNumber}/documents`
                                                            )
                                                        }
                                                        className="h-5 w-5 text-blue-500 cursor-pointer hover:text-blue-800"
                                                    />
                                                    {/* Tooltip shown when hovered on icon */}
                                                    <div className="absolute -top-1 left-6 z-10 hidden group-hover:block whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                                                        View
                                                    </div>
                                                </div>
                                                <FontAwesomeIcon />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="4"
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
