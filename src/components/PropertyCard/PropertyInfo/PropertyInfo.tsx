import clsx from 'clsx'
import { MapPin } from 'lucide-react'
import React from 'react'
import bathImg from '../../../assets/icons/bath.svg'
import bedImg from '../../../assets/icons/bed.svg'
import squareImg from '../../../assets/icons/border-outer.svg'
import { t } from '../../../i18n/translations'
import type { PropertyCardVariant, PropertyFeatures } from '../../../types/property'
import styles from './PropertyInfo.module.css'

interface PropertyInfoProps {
    property: {
        price: number
        pricePerSqm?: number
        currency: string
        location: string
        features: PropertyFeatures
    }
    variant: PropertyCardVariant
}

export const PropertyInfo: React.FC<PropertyInfoProps> = ({ property, variant }) => {
    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('ru-RU').format(price)
    }

    const formatPricePerSqm = (price: number) => {
        return new Intl.NumberFormat('ru-RU').format(price)
    }

    const showLocation = variant === 'small' || variant === 'large'
    const showDetails = variant !== 'medium' // All variants except medium show details

    return (
        <div className={clsx(styles.info, styles[`info--${variant}`])}>
            <div className={clsx(styles.priceSection, styles[`priceSection--${variant}`])}>
                <div className={clsx(styles.price, styles[`price--${variant}`])}>
                    ${formatPrice(property.price)}
                </div>
                {property.pricePerSqm && (
                    <div className={styles.pricePerSqm}>
                        ${formatPricePerSqm(property.pricePerSqm)} {t('pricePerSqm')}
                    </div>
                )}
            </div>

            {showDetails && (
                <div className={clsx(styles.details, styles[`details--${variant}`])}>
                    {property.features.floor && (
                        <span className={styles.floor}>{property.features.floor}</span>
                    )}
                    {property.features.view && (
                        <span className={styles.view}>{property.features.view}</span>
                    )}
                </div>
            )}

            {showLocation && (
                <div className={styles.locationHorizontal}>
                    <MapPin size={12} />
                    <span>{property.location}</span>
                </div>
            )}

            <div className={clsx(styles.features, styles[`features--${variant}`])}>
                <div className={clsx(styles.feature, styles[`feature--${variant}`])}>
                    <img
                        className={clsx(styles.featureIcon, styles[`featureIcon--${variant}`])}
                        src={bedImg}
                        alt="bed"
                    />
                    <p>{property.features.bedrooms}</p>
                </div>
                <span>|</span>
                <div className={clsx(styles.feature, styles[`feature--${variant}`])}>
                    <img
                        className={clsx(styles.featureIcon, styles[`featureIcon--${variant}`])}
                        src={bathImg}
                        alt="bath"
                    />
                    <p>{property.features.bathrooms}</p>
                </div>
                <span>|</span>
                <div className={clsx(styles.feature, styles[`feature--${variant}`])}>
                    <img
                        className={clsx(styles.featureIcon, styles[`featureIcon--${variant}`])}
                        src={squareImg}
                        alt="square"
                    />
                    <p>{property.features.area} м²</p>
                </div>
            </div>
        </div>
    )
}