import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { useState, useEffect } from "react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        file: null,
        filetype: "",
        company: "",
    });

    const [fileTypeOptions, setFileTypeOptions] = useState([]);

    const fileTypesByCompany = {
        AIB: ["OO", "MEMO", "MAN"],
        CSC: ["OO", "MEMO", "MAN"],
        BSP: ["MEMO", "MAN", "REP"],
    };

    useEffect(() => {
        if (data.company && fileTypesByCompany[data.company]) {
            setFileTypeOptions(fileTypesByCompany[data.company]);
            setData("filetype", "");
        } else {
            setFileTypeOptions([]);
            setData("filetype", "");
        }
    }, [data.company]);

    function submit(e) {
        e.preventDefault();
        post(route("files.store"));
    }

    return (
        <AuthenticatedLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-red-700 mb-6">
                        Upload a New File
                    </h2>

                    <form onSubmit={submit} className="space-y-6">
                        {/* File input */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Select File
                            </label>
                            <input
                                type="file"
                                onChange={(e) =>
                                    setData("file", e.target.files[0])
                                }
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                            />
                            {errors.file && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.file}
                                </p>
                            )}
                        </div>

                        {/* Company selection */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                Company
                            </label>
                            <select
                                value={data.company}
                                onChange={(e) =>
                                    setData("company", e.target.value)
                                }
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                            >
                                <option value="">Select company</option>
                                <option value="CSC">CSC</option>
                                <option value="BSP">BSP</option>
                                <option value="AIB">AIB</option>
                            </select>
                            {errors.company && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.company}
                                </p>
                            )}
                        </div>

                        {/* File type selection (dependent on company) */}
                        <div>
                            <label className="block text-gray-700 mb-2">
                                File Type
                            </label>
                            <select
                                name="filetype"
                                value={data.filetype}
                                onChange={(e) =>
                                    setData("filetype", e.target.value)
                                }
                                className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
                                disabled={fileTypeOptions.length === 0}
                            >
                                <option value="">Select type</option>
                                {fileTypeOptions.map((type, idx) => (
                                    <option key={idx} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.filetype && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.filetype}
                                </p>
                            )}
                        </div>

                        {/* Submit button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-2 rounded shadow disabled:opacity-50"
                            >
                                {processing ? "Uploading..." : "Upload"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
