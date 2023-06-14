import React, { useEffect, useRef } from 'react';

const ImageResizer = ({ imageUrl, targetWidth, targetHeight }: any) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadImage = async () => {
      const img = new Image();
      img.crossOrigin = 'Anonymous'; // Enable CORS if required
      img.src = imageUrl;

      await img.decode(); // Wait for the image to load

      const canvas = canvasRef.current;
            //@ts-ignore
      const ctx = canvas?.getContext('2d');

      // Set the canvas dimensions to the target width and height
      //@ts-ignore
      canvas.width = targetWidth;
      //@ts-ignore
      canvas.height = targetHeight;

      // Draw the image on the canvas with the desired dimensions
      ctx?.drawImage(img, 0, 0, targetWidth, targetHeight);

      // Get the resized image as a data URL
      //@ts-ignore
      const resizedImageUrl = canvas?.toDataURL();

      // Do something with the resized image URL (e.g., display or download)
      console.log(resizedImageUrl);
    };

    loadImage();
  }, [imageUrl, targetWidth, targetHeight]);

  return <canvas ref={canvasRef} style={{ display: 'none' }} />;
};

export default ImageResizer;
