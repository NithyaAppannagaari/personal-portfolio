import React, { useState, useEffect } from 'react';

const images = [
    'square1.jpg',
    'square2.jpg',
    'square3.jpg',
    'vertical1.jpg',
    'vertical2.jpg',
    'vertical3.jpg',
    'vertical4.jpg',
    'vertical5.jpg',
    'vertical6.jpg',
    'vertical7.jpeg',
    'wide1.jpg',
    'wide2.jpg',
    'wide3.jpg',
    'wide4.jpg',
    'wide5.jpg',
    'wide6.jpeg',
];

const MasonryGrid = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        // Add event listener for keydown
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="mb-4 break-inside-avoid">
                        <img
                            src={src}
                            className="w-full object-cover rounded-lg cursor-pointer"
                            alt="my photography"
                            onClick={() => handleImageClick(src)}
                        />
                    </div>
                ))}
            </div>

            {/* Fullscreen Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <button
                        className="absolute top-4 right-4 text-white text-3xl cursor-pointer"
                        onClick={closeModal}
                    >
                        &times;
                    </button>
                    <img
                        src={selectedImage}
                        alt="Fullscreen view"
                        className="max-w-full max-h-full rounded-lg"
                    />
                </div>
            )}
        </div>
    );
};

export default MasonryGrid;
