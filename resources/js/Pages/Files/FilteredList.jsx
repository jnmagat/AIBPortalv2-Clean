import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faDownload } from "@fortawesome/free-solid-svg-icons"; // Importing icons

export default function FilteredList({ files, company, filetype }) {
    return (
        <AuthenticatedLayout>
            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
                        {company} - {filetype} Files
                    </h1>

                    {files.length > 0 ? (
                        <ul className="bg-white rounded-lg shadow divide-y divide-gray-200">
                            {files.map((file) => (
                                <li
                                    key={file.id}
                                    className="flex items-center justify-between px-6 py-4 hover:bg-gray-50"
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-red-100 text-red-600 rounded-full p-2">
                                            📄
                                        </div>
                                        <span className="text-gray-800 font-medium">
                                            {file.file_name}
                                        </span>
                                    </div>

                                    <div className="flex space-x-4">
                                        <a
                                            href={`/storage/${file.file_path}`} // 👈 Public preview link
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-green-600 hover:text-green-800 font-semibold underline"
                                        >
                                            <FontAwesomeIcon icon={faEye} />
                                        </a>
                                        <a
                                            href={route(
                                                "files.download",
                                                file.id
                                            )}
                                            className="text-sm text-blue-600 hover:text-blue-800 font-semibold underline"
                                            rel="noopener noreferrer"
                                        >
                                            <FontAwesomeIcon
                                                icon={faDownload}
                                            />
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center text-gray-500">
                            No files found for {company} - {filetype}.
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
