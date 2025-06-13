'use client'

import React from 'react'
import type { PropertyCardVariant, PropertyImage } from '../../../types/property'
import styles from './ImageGallery.module.css'

interface ImageGalleryProps {
    images: PropertyImage[]
    currentIndex: number
    onIndexChange: (index: number) => void
    variant: PropertyCardVariant
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({
    images,
    currentIndex,
    onIndexChange,
    variant
}) => {
    if (images.length === 0) {
        return (
            <div className={styles.placeholder}>
                <span>No image available</span>
            </div>
        )
    }

    return (
        <div className={styles.gallery}>
            <img
                src={images[currentIndex]?.url}
                alt={images[currentIndex]?.alt}
                className={styles.image}
            />

            {images.length > 1 && (
                <div className={`${styles.indicators} ${styles[`indicators--${variant}`]}`}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.indicator} 
                                ${styles[`indicator--${variant}`]} 
                                ${index === currentIndex ? styles.indicatorActive : ''
                                }`}
                            onClick={() => onIndexChange(index)}
                            aria-label={`View image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}