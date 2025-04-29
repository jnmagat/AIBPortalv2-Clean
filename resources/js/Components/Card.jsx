export default function Card({ title, items = [] }) {
    // Only render the card if there are items
    if (items.length === 0) return null;

    return (
        <div className="w-56 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Card Header */}
            <div className="bg-red-800 text-white text-center py-2 text-xs font-semibold">
                {title}
            </div>

            {/* Card Body */}
            <div className="p-2 space-y-1 max-h-[300px] overflow-hidden hover:overflow-y-auto hover:max-h-[300px] transition-all duration-300">
                {items.slice(0, 15).map((item, index) => (
                    <div
                        key={item.id || index}
                        className="border-b last:border-0 p-2 hover:shadow-sm transition duration-200"
                    >
                        <p className="font-medium text-gray-900 text-xs truncate">
                            {item.file_name ||
                                item.title ||
                                item.f_name + " " + item.l_name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
