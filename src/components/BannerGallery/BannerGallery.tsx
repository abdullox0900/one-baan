import clsx from 'clsx'
import type { TouchEvent } from 'react'
import React, { useRef, useState } from 'react'
import styles from './BannerGallery.module.css'

interface BannerImage {
    url: string
    alt: string
}

interface BannerGalleryProps {
    images: BannerImage[]
    className?: string
}

const BannerGallery: React.FC<BannerGalleryProps> = ({ images, className = '' }) => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const touchStartX = useRef<number | null>(null)
    const touchEndX = useRef<number | null>(null)

    if (!images || images.length === 0) {
        return <div className={clsx(styles.placeholder, className)}>No image available</div>
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    // Touch event handlers
    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return

        const diff = touchStartX.current - touchEndX.current
        const threshold = 50 // Minimum swipe distance

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left -> next image
                handleNext()
            } else {
                // Swipe right -> previous image
                handlePrev()
            }
        }

        // Reset values
        touchStartX.current = null
        touchEndX.current = null
    }

    return (
        <div
            className={clsx(styles.gallery, className)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <img
                src={images[currentIndex].url}
                alt={images[currentIndex].alt}
                className={styles.image}
            />

            {images.length > 1 && (
                <>
                    <div className={styles.indicators}>
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={clsx(
                                    styles.indicator,
                                    index === currentIndex && styles.indicatorActive
                                )}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`View image ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default BannerGallery 