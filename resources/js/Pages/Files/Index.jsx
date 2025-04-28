import FileUploadForm from "@/Components/FileUploadForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Index({ files }) {
    return (
        <AuthenticatedLayout>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">
                    Upload and Manage Files
                </h1>
                {/* <FileUploadForm /> */}
                <h2 className="text-xl font-semibold mb-2">Uploaded Files</h2>
                <ul>
                    {files.map((file) => (
                        <li key={file.id}>
                            {file.file_name}{" "}
                            <a
                                href={route("files.download", file.id)}
                                rel="noopener noreferrer"
                                className="text-blue-600 underline"
                            >
                                Download
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </AuthenticatedLayout>
    );
}
