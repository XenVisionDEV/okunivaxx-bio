import { useState } from 'react'
import { User } from 'lucide-react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackClassName?: string
}

export function ImageWithFallback({ 
  src, 
  alt, 
  className = "", 
  fallbackClassName = "" 
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-muted ${className} ${fallbackClassName}`}>
        <User className="w-1/3 h-1/3 text-muted-foreground" />
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div className={`flex items-center justify-center bg-muted animate-pulse ${className}`}>
          <User className="w-1/3 h-1/3 text-muted-foreground" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : 'block'}`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  )
}