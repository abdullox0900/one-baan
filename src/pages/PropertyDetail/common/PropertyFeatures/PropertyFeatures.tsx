import React from 'react'
import AmenitiesTags from '../../../../components/AmenitiesTags'
import { StatusBadges } from '../../../../components/PropertyCard'
import type { AmenityType } from '../../../../types/amenities'
import { getAmenities } from '../../../../utils/amenities'
import styles from './PropertyFeatures.module.css'

interface PropertyFeaturesProps {
    description: string
    amenityTypes: AmenityType[]
    daysOnPlatform: number
    viewCount: number
}

const PropertyFeatures: React.FC<PropertyFeaturesProps> = ({
    description,
    amenityTypes,
    daysOnPlatform,
    viewCount
}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Особенности предложения</h2>

            <StatusBadges status={{
                isVerified: true,
                specialPrice: true,
                onlyOnOneBaan: true,
            }} variant={'large-horizontal'} className={styles.statusBadges} />

            {/* Property description */}
            <p className={styles.description}>{description}</p>

            {/* Feature list using AmenitiesTags */}
            <div className={styles.featureList}>
                <AmenitiesTags amenities={getAmenities(amenityTypes)} />
            </div>

            {/* Stats */}
            <div className={styles.stats}>
                <span className={styles.statItem}>{daysOnPlatform} дней на OneBaan</span>
                <span className={styles.statDivider}>|</span>
                <span className={styles.statItem}>{viewCount} просмотров</span>
            </div>
        </div>
    )
}

export default PropertyFeatures 