import React from 'react'
import homeImg from '../../../../assets/img/home-img.png'
import AmenitiesTags from '../../../../components/AmenitiesTags'
import type { AmenityType } from '../../../../types/amenities'
import { getAmenities } from '../../../../utils/amenities'
import styles from './PropertyAmenities.module.css'

interface BuildingInfo {
    constructionYear: string | number
    totalUnits: number
    developer: string
}

interface PropertyAmenitiesProps {
    buildingName: string
    buildingInfo: BuildingInfo
    amenityTypes: AmenityType[]
}

const PropertyAmenities: React.FC<PropertyAmenitiesProps> = ({
    buildingName,
    buildingInfo,
    amenityTypes
}) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Удобства в {buildingName}</h2>

            {/* Building image and info */}
            <div className={styles.buildingInfo}>
                <div className={styles.buildingImageContainer}>
                    <img src={homeImg} alt={buildingName} className={styles.buildingImage} />
                </div>

                <div className={styles.infoList}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Год строительства:</span>
                        <span className={styles.infoValue}>{buildingInfo.constructionYear}</span>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Всего апартаментов:</span>
                        <span className={styles.infoValue}>{buildingInfo.totalUnits}</span>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Застройщик:</span>
                        <span className={styles.infoValue}>{buildingInfo.developer.slice(0, 20)}...</span>
                    </div>
                </div>
            </div>

            {/* Amenities list using AmenitiesTags */}
            <div className={styles.amenitiesList}>
                <AmenitiesTags amenities={getAmenities(amenityTypes)} isCompact={true} />
            </div>
        </div>
    )
}

export default PropertyAmenities 