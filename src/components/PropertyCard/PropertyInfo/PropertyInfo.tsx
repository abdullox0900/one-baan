import { MapPin } from 'lucide-react'
import React from 'react'
import bathImg from '../../../assets/icons/bath.svg'
import bedImg from '../../../assets/icons/bed.svg'
import squareImg from '../../../assets/icons/border-outer.svg'
import type { Property, PropertyCardVariant } from '../../../types/property'
import styles from './PropertyInfo.module.css'

interface PropertyInfoProps {
    property: Property
    variant: PropertyCardVariant
}

export const PropertyInfo: React.FC<PropertyInfoProps> = ({ property, variant }) => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ru-RU').format(price)
    }

    const formatPricePerSqm = (price: number) => {
        return new Intl.NumberFormat('ru-RU').format(price)
    }

    return (
        <div className={`${styles.info} ${styles[`info--${variant}`]}`}>
            <div className={`${styles.priceSection} ${styles[`priceSection--${variant}`]}`}>
                <div className={`${styles.price} ${styles[`price--${variant}`]}`}>
                    ${formatPrice(property.price)}
                </div>
                {property.pricePerSqm && (
                    <div className={styles.pricePerSqm}>
                        ${formatPricePerSqm(property.pricePerSqm)} за м²
                    </div>
                )}
            </div>

            {variant === 'small' || variant === 'medium' || variant === 'large' || variant === 'large-horizontal' && (
                <div className={styles.details}>
                    {property.features.floor && (
                        <span className={styles.floor}>{property.features.floor} этаж</span>
                    )}
                    {property.features.view && (
                        <span className={styles.view}>{property.features.view}</span>
                    )}
                </div>
            )}

            {variant === 'small' || variant === 'medium' || variant === 'large' ? (
                <div className={`${styles.details} ${styles[`details--${variant}`]}`}>
                    {property.features.floor && (
                        <span className={styles.floor}>{property.features.floor} этаж</span>
                    )}
                    {property.features.view && (
                        <span className={styles.view}>{property.features.view}</span>
                    )}
                </div>
            ) : (
                <></>
            )}

            {variant === 'small' || variant === 'large' ? (
                <div className={styles.locationHorizontal}>
                    <MapPin size={12} />
                    <span>{property.location}</span>
                </div>
            ) : (
                <></>
            )}

            <div className={`${styles.features} ${styles[`features--${variant}`]}`}>
                <div className={`${styles.feature} ${styles[`feature--${variant}`]}`}>
                    <img className={`${styles.featureIcon} ${styles[`featureIcon--${variant}`]}`} src={bedImg} alt="bed" />
                    <p>{property.features.bedrooms}</p>
                </div>
                <span>|</span>
                <div className={`${styles.feature} ${styles[`feature--${variant}`]}`}>
                    <img className={`${styles.featureIcon} ${styles[`featureIcon--${variant}`]}`} src={bathImg} alt="bath" />
                    <p>{property.features.bathrooms}</p>
                </div>
                <span>|</span>
                <div className={`${styles.feature} ${styles[`feature--${variant}`]}`}>
                    <img className={`${styles.featureIcon} ${styles[`featureIcon--${variant}`]}`} src={squareImg} alt="square" />
                    <p>{property.features.area} м²</p>
                </div>
            </div>

            {variant === 'horizontal' ? (
                <div className={`${styles.details} ${styles[`details--${variant}`]}`}>
                    {property.features.floor && (
                        <span className={styles.floor}>{property.features.floor} этаж</span>
                    )}
                    {property.features.view && (
                        <span className={styles.view}>{property.features.view}</span>
                    )}
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}