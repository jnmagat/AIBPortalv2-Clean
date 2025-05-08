import { useState } from "react";
import { router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from "@/Components/Breadcrumbs";

export default function AccountDocuments({ account, customer, documents }) {
    const breadcrumbs = [
        {
            label: account.accountType,
            isLink: true,
            link: `/records?type=${account.accountType}`, // This takes you back to Savings/Current selection
        },
        {
            label: `${customer.firstName} ${customer.lastName}`,
            isLink: true,
            link: `/customers/${customer.customerID}/accounts?type=${account.accountType}`, // Back to accounts list
        },
        {
            label: `Account: ${account.accountNumber}`,
            isLink: false, // No link on the current page
        },
    ];

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        documentType: "",
        file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("documentType", formData.documentType);
        data.append("documentName", formData.file.name); // use uploaded file name
        data.append("file", formData.file);
        data.append("customerID", customer.customerID);
        data.append("accountNumber", account.accountNumber); // Make sure this exists

        router.post("/documents/upload", data, {
            onSuccess: () => {
                setShowModal(false);
                setFormData({ documentType: "", file: null });
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="p-6 max-w-6xl mx-auto">
                {/* Breadcrumbs */}
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <div className="bg-white border border-gray-200 rounded-lg shadow p-6">
                    <h1 className="text-xl font-semibold text-red-600 mb-4">
                        Customer Document View
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Customer Details */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <h4 className="bg-red-800 text-white text-center py-2 font-semibold rounded-t-lg">
                                Customer Details
                            </h4>
                            <div className="space-y-2 m-5">
                                <p className="text-gray-700 border-b border-gray-200 pb-2">
                                    <strong className="font-medium text-gray-900">
                                        Name:
                                    </strong>{" "}
                                    {customer.firstName} {customer.lastName}
                                </p>
                                <p className="text-gray-700 border-b border-gray-200 pb-2">
                                    <strong className="font-medium text-gray-900">
                                        Customer ID:
                                    </strong>{" "}
                                    {customer.customerID}
                                </p>
                                <p className="text-gray-700 border-b border-gray-200 pb-2">
                                    <strong className="font-medium text-gray-900">
                                        Branch:
                                    </strong>{" "}
                                    {customer.branch}
                                </p>
                                <p className="text-gray-700 border-b border-gray-200 pb-2">
                                    <strong className="font-medium text-gray-900">
                                        Age:
                                    </strong>{" "}
                                    {customer.age}
                                </p>
                                <p className="text-gray-700 border-b border-gray-200 pb-2">
                                    <strong className="font-medium text-gray-900">
                                        Bank Code:
                                    </strong>{" "}
                                    {customer.bankCode}
                                </p>
                            </div>
                        </div>

                        {/* Documents and Upload */}
                        <div className="bg-gray-50 border border-gray-200 rounded p-4">
                            <div className="flex justify-between items-center mb-2">
                                <h2 className="text-lg font-semibold text-red-600">
                                    Documents
                                </h2>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="bg-blue-700 text-white px-3 py-1 rounded hover:bg-blue-900"
                                >
                                    Upload
                                </button>
                            </div>

                            {documents.length > 0 ? (
                                <div className="overflow-hidden rounded border">
                                    <div className="max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 scrollbar-thumb-rounded scrollbar-track-rounded">
                                        <table className="min-w-full table-auto">
                                            <thead className="bg-red-800 sticky top-0 z-10 rounded-t-lg">
                                                <tr>
                                                    <th className="px-4 py-2 text-center text-sm font-semibold text-white">
                                                        Type
                                                    </th>
                                                    <th className="px-4 py-2 text-center text-sm font-semibold text-white">
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
                                                        <td className="px-4 py-2 text-center text-sm text-gray-700">
                                                            {doc.documentType}
                                                        </td>
                                                        <td className="px-4 py-2 text-center text-sm text-blue-600">
                                                            <div className="relative group inline-block">
                                                                <a
                                                                    href={
                                                                        doc.filePath
                                                                    }
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="underline"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faEye
                                                                        }
                                                                    />
                                                                    {/* Tooltip */}
                                                                    <div className="absolute -top-1 left-6 z-10 hidden group-hover:block whitespace-nowrap bg-gray-800 text-white text-xs rounded py-1 px-2 shadow-lg">
                                                                        View
                                                                    </div>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-gray-500">
                                    No documents uploaded.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h2 className="text-lg font-semibold text-red-600 mb-4">
                            Upload Document
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    Document Type
                                </label>
                                <select
                                    value={formData.documentType}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            documentType: e.target.value,
                                        })
                                    }
                                    className="w-full border border-gray-300 rounded px-3 py-2"
                                    required
                                >
                                    <option value="" disabled>
                                        Select document type
                                    </option>
                                    <option value="ID">ID</option>
                                    <option value="Proof of Billing">
                                        Proof of Billing
                                    </option>
                                    <option value="Contract">Contract</option>
                                    <option value="Bank Statement">
                                        Bank Statement
                                    </option>
                                    {/* Add more types as needed */}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-sm font-medium">
                                    File
                                </label>
                                <input
                                    type="file"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            file: e.target.files[0],
                                        })
                                    }
                                    className="w-full"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-gray-700 border rounded hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
