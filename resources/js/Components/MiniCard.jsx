import React from "react";

const MiniCard = ({ title, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 w-48 text-center border hover:border-blue-500"
        >
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        </div>
    );
};

export default MiniCard;
