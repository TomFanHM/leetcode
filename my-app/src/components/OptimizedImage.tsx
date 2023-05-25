import { useState } from "react";

type OptimizedImageProps = {
  src: string;
  alt: string;
  className: string;
};

export default function OptimizedImage(props: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <img
      src={imageError ? "/fallback.png" : props.src}
      className={`${props.className} ${imageLoaded ? "" : "loading-skeleton"}`}
      loading="lazy"
      onLoad={handleImageLoad}
      onError={handleImageError}
      alt={props.alt}
    />
  );
}
