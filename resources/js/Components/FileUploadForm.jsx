// resources/js/Components/FileUploadForm.jsx
import { useForm } from "@inertiajs/react";

export default function FileUploadForm() {
    const { data, setData, post, processing, reset } = useForm({
        file: null,
    });

    function submit(e) {
        e.preventDefault();
        post(route("upload"), {
            onSuccess: () => reset(),
        });
    }

    return (
        <form onSubmit={submit} className="mb-6">
            <input
                type="file"
                onChange={(e) => setData("file", e.target.files[0])}
                className="mb-2"
            />
            <br />
            <button
                type="submit"
                disabled={processing}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Upload
            </button>
        </form>
    );
}
