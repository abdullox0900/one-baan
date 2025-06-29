import clsx from 'clsx'
import React from 'react'
import type { Amenity } from '../../types/amenities'
import styles from './AmenitiesTags.module.css'

interface AmenitiesTagsProps {
    amenities: Amenity[]
    isCompact?: boolean
    className?: string
}

export const AmenitiesTags: React.FC<AmenitiesTagsProps> = ({
    amenities,
    isCompact = false,
    className = '',
}) => {
    if (!amenities || amenities.length === 0) return null

    return (
        <div className={clsx(styles.container, styles['container--default'], className)}>
            {amenities.map((amenity) => (
                <div
                    key={amenity.id}
                    className={clsx(
                        styles.tag,
                        isCompact && styles['tag--compact']
                    )}
                >
                    <span className={styles.icon}>
                        {amenity.icon && React.createElement(amenity.icon)}
                    </span>
                    <span className={styles.label}>{amenity.label}</span>
                </div>
            ))}
        </div>
    )
}

export default AmenitiesTags 