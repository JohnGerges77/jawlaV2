import Image from 'next/image';

function DetailsImages({ images }) {
  // Default images for when API provides fewer than 3 images
  const defaultImages = [
    '/default-image1.png',
    '/default-image2.png',
    '/default-image3.png',
  ];

  // Ensure images is an array, fallback to empty array if not
  const safeImages = Array.isArray(images) ? images : [];

  // Select up to 3 images, use defaults if needed
  const imageList = [
    safeImages[0] || defaultImages[0],
    safeImages[1] || defaultImages[1],
    safeImages[2] || defaultImages[2],
  ];

  return (
    <div className="w-full flex flex-col mb-6 md:mb-0">
      <div className="grid grid-cols-1 gap-5 place-items-center">
        {/* First image */}
        <Image
          src={imageList[0]}
          alt="Image 1"
          width={250}
          height={300}
          className="rounded-lg object-cover"
        />
        {/* Second image (absolute) */}
        <div className="absolute">
          <Image
            src={imageList[1]}
            alt="Image 2"
            width={250}
            height={310}
            className="rounded-lg object-cover relative left-36 z-50"
          />
        </div>
        {/* Third image */}
        <Image
          src={imageList[2]}
          alt="Image 3"
          width={250}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default DetailsImages;