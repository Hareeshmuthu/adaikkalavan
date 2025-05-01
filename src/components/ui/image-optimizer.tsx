
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface ImageOptimizerProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

export const ImageOptimizer = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  objectFit = "cover"
}: ImageOptimizerProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority) {
      const img = new Image();
      img.src = src;
      img.onload = () => setLoaded(true);
      img.onerror = () => setError(true);
    }
  }, [src, priority]);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const handleImageError = () => {
    setError(true);
  };

  const imgStyle = {
    objectFit,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '100%',
    opacity: loaded ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out',
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden bg-muted/20", 
        className
      )}
      style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
    >
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-muted/30" />
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
          <span className="text-muted-foreground text-sm">Image not available</span>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={imgStyle}
        className={cn(
          "w-full h-full transition-transform duration-300",
          loaded ? "scale-100" : "scale-105"
        )}
      />
    </div>
  );
};

export default ImageOptimizer;
