'use client'

import { Heart, Share2 } from 'lucide-react'
import React, { useState } from 'react'
import type { Property, PropertyCardVariant } from '../../types/property'
import { ActionButtons } from './ActionButtons/ActionButtons'
import Avatar from './Avatar/Avatar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import styles from './PropertyCard.module.css'
import { PropertyInfo } from './PropertyInfo/PropertyInfo'
import { StatusBadges } from './StatusBadges/StatusBadges'
import Title from './Title/Title'

interface PropertyCardProps {
    property: Property
    variant?: PropertyCardVariant
    onFavoriteClick?: (propertyId: string) => void
    onShareClick?: (propertyId: string) => void
    onWhatsAppClick?: (propertyId: string) => void
    onContactClick?: (propertyId: string) => void
    isFavorite?: boolean
    className?: string
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
    property,
    variant = 'large',
    onFavoriteClick,
    onShareClick,
    onWhatsAppClick,
    onContactClick,
    isFavorite = false,
    className = '',
}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const handleFavoriteClick = () => {
        onFavoriteClick?.(property.id)
    }

    const handleShareClick = () => {
        onShareClick?.(property.id)
    }

    const handleWhatsAppClick = () => {
        onWhatsAppClick?.(property.id)
    }

    const handleContactClick = () => {
        onContactClick?.(property.id)
    }

    const cardClass = `${styles.card} ${styles[`card--${variant}`]} ${className}`

    return (
        <div className={cardClass}>
            <div className={styles.imageContainer}>
                <ImageGallery
                    images={property.images}
                    currentIndex={currentImageIndex}
                    variant={variant}
                    onIndexChange={setCurrentImageIndex}
                />

                {
                    variant === 'large' || variant === 'small' || variant === 'medium' ? (
                        <Avatar variant={variant} />
                    ) : (
                        <></>
                    )
                }
            </div>

            <div className={`${styles.cardActions} ${styles[`cardActions--${variant}`]}`}>
                <button
                    className={`${styles.actionButton} ${styles[`cardActionsButton--${variant}`]} ${isFavorite ? styles.actionButtonActive : ''}`}
                    onClick={handleFavoriteClick}
                    aria-label="Add to favorites"
                >
                    <Heart size={20} />
                </button>
                <button
                    className={`${styles.actionButton} ${styles[`cardActionsButton--${variant}`]} ${styles[`actionButtonShare--${variant}`]}`}
                    onClick={handleShareClick}
                    aria-label="Share property"
                >
                    <Share2 size={20} />
                </button>
                {
                    variant === 'large-horizontal' || variant === 'horizontal' ? (
                        <Avatar variant={variant} />
                    ) : (
                        <></>
                    )
                }
            </div>

            <div className={styles.content}>
                <Title variant={variant} title={property?.title} />

                <PropertyInfo property={property} variant={variant} />

                <StatusBadges status={property.status} variant={variant} />

                {
                    variant !== 'large-horizontal' && (
                        <ActionButtons
                            property={property}
                            variant={variant}
                            phone={property.contact.phone || ''}
                            onWhatsAppClick={handleWhatsAppClick}
                            onContactClick={handleContactClick}
                        />
                    )
                } {
                    variant === 'large-horizontal' && (
                        <ActionButtons
                            property={property}
                            variant={variant}
                            phone={property.contact.phone || ''}
                            onWhatsAppClick={handleWhatsAppClick}
                            onContactClick={handleContactClick}
                        />
                    )
                }
            </div>
        </div>
    )
}