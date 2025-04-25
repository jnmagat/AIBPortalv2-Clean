export default function Card({ className = "", ...props }) {
    return (
        <div className="w-80 bg-white rounded-md shadow-lg">
            <div className="bg-red-800 text-white text-center py-2 rounded-t-md font-semibold">
                ANNOUNCEMENTS
            </div>
            <div className="p-4 text-gray-800 text-sm">
                <ul className="list-disc pl-4">
                    <li>Announcement 1</li>
                    <li>Announcement 2</li>
                    <li>Announcement 1</li>
                    <li>Announcement 2</li>
                    <li>Announcement 2</li>
                </ul>
            </div>
        </div>
    );
}
