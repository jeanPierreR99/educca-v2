import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
    open: boolean;
    onClose: () => void;
    title: string;
    items: string[];
};

const PromoterModal = ({ open, onClose, title, items }: Props) => {
    if (!open) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 bg-black/50 cursor-pointer flex items-center justify-center px-4"
            onClick={handleOverlayClick}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-xl cursor-default max-w-md w-full p-6 relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                >
                    <X />
                </button>
                <h2 className="text-xl font-bold text-green-700 mb-4">{title}</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            </motion.div>
        </div>
    );
};

export default PromoterModal;
