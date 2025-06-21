'use client'

import clsx from 'clsx'
import React from 'react'
import { t } from '../../../i18n/translations'
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
                <span>{t('noImageAvailable')}</span>
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
                <div className={clsx(styles.indicators, styles[`indicators--${variant}`])}>
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={clsx(
                                styles.indicator,
                                styles[`indicator--${variant}`],
                                index === currentIndex && styles.indicatorActive
                            )}
                            onClick={() => onIndexChange(index)}
                            aria-label={`${t('viewImage')} ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}