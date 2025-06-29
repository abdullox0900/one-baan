import React from 'react'
import bathIcon from '../../../assets/icons/bath.svg'
import bedIcon from '../../../assets/icons/bed.svg'
import borderIcon from '../../../assets/icons/border-outer.svg'
import AmenitiesTags from '../../../components/AmenitiesTags'
import { getAmenities } from '../../../utils/amenities'
import styles from './PropertyInfo.module.css'

interface PropertyInfoProps {
    title: string
    price: string
    pricePerMeter: string
    bedrooms: number
    bathrooms: number
    area: number
    constructionYear: number
    distanceToSea: number
    floor: string
    path: string[]
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({
    title,
    price,
    pricePerMeter,
    bedrooms,
    bathrooms,
    area,
    constructionYear,
    distanceToSea,
    floor,
    path
}) => {
    const amenities = getAmenities(['furniture', 'balcony', 'readyToRent'])

    return (
        <div className={styles.propertyInfoContainer}>

            <div className={styles.amenitiesContainer}>
                <AmenitiesTags amenities={amenities} />
            </div>

            {/* Property title */}
            <h1 className={styles.title}>{title}</h1>

            {/* Price section */}
            <div className={styles.priceSection}>
                <h2 className={styles.price}>{price}</h2>
                <span className={styles.pricePerMeter}>{pricePerMeter} / м²</span>
            </div>

            {/* Property details */}
            <div className={styles.detailsSection}>
                <div className={styles.detailItem}>
                    <img src={bedIcon} alt="Bedrooms" className={styles.detailIcon} />
                    <span className={styles.detailText}>{bedrooms} спальни</span>
                </div>
                <div className={styles.detailItem}>
                    <img src={bathIcon} alt="Bathrooms" className={styles.detailIcon} />
                    <span className={styles.detailText}>{bathrooms} ванные</span>
                </div>
                <div className={styles.detailItem}>
                    <img src={borderIcon} alt="Area" className={styles.detailIcon} />
                    <span className={styles.detailText}>{area} м²</span>
                </div>
            </div>

            {/* Location path */}
            <div className={styles.locationPath}>
                {path.map((item, index) => (
                    <React.Fragment key={index}>
                        {index > 0 && <span className={styles.pathSeparator}>→</span>}
                        <span className={styles.pathItem}>{item}</span>
                    </React.Fragment>
                ))}
            </div>

            {/* Additional info cards */}
            <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                    <div className={styles.infoCardContent}>
                        <div className={styles.infoCardLabel}>Год строительства</div>
                        <div className={styles.infoCardValue}>{constructionYear}</div>
                    </div>
                    <div className={styles.infoCardIcon}>
                        <svg width={40} height={40} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.0003 8.83333V21.3333H30.667V10.5L22.3337 4.66667L14.0003 10.5V13H10.667V8.83333L22.3337 0.5L34.0003 8.83333ZM24.8337 9.66667H23.167V11.3333H24.8337V9.66667ZM21.5003 9.66667H19.8337V11.3333H21.5003V9.66667ZM24.8337 13H23.167V14.6667H24.8337V13ZM21.5003 13H19.8337V14.6667H21.5003V13ZM30.667 24.6667H27.3337C27.3337 22.6667 26.0837 20.8667 24.217 20.1667L13.9503 16.3333H0.666992V34.6667H10.667V32.2667L22.3337 35.5L35.667 31.3333V29.6667C35.667 26.9 33.4337 24.6667 30.667 24.6667ZM4.00033 31.3333V19.6667H7.33366V31.3333H4.00033ZM22.2837 32.0167L10.667 28.8V19.6667H13.3503L23.0503 23.2833C23.617 23.5 24.0003 24.05 24.0003 24.6667C24.0003 24.6667 20.6837 24.5833 20.167 24.4167L16.2003 23.1L15.1503 26.2667L19.117 27.5833C19.967 27.8667 20.8503 28.0167 21.7503 28.0167H30.667C31.317 28.0167 31.9003 28.4 32.167 28.95L22.2837 32.0167Z" fill="#E9D8FD" />
                        </svg>
                    </div>
                </div>

                <div className={styles.infoCard}>
                    <div className={styles.infoCardContent}>
                        <div className={styles.infoCardLabel}>Расстояние до моря</div>
                        <div className={styles.infoCardValue}>{distanceToSea} м</div>
                    </div>
                    <div className={styles.infoCardIcon}>
                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.6663 35C34.8163 35 33.783 34.3834 33.033 33.9334C32.4163 33.5667 32.033 33.3334 31.1163 33.3334C30.183 33.3334 29.8163 33.55 29.1997 33.9334C28.433 34.3834 27.4163 35 25.5663 35C23.7163 35 22.683 34.3834 21.933 33.9334C21.3163 33.5667 20.933 33.3334 20.0163 33.3334C19.083 33.3334 18.7163 33.55 18.0997 33.9334C17.333 34.3834 16.2997 35 14.4497 35C12.5997 35 11.5663 34.3834 10.8163 33.9334C10.1997 33.55 9.81634 33.3334 8.89967 33.3334C7.98301 33.3334 7.59967 33.55 6.98301 33.9334C6.21634 34.3834 5.18301 35 3.33301 35V31.6667C4.26634 31.6667 4.63301 31.45 5.24967 31.0667C6.01634 30.6167 7.04967 30 8.89967 30C10.7497 30 11.783 30.6167 12.533 31.0667C13.1497 31.45 13.5163 31.6667 14.4497 31.6667C15.383 31.6667 15.7497 31.45 16.3663 31.0667C17.133 30.6167 18.1663 30 20.0163 30C21.8663 30 22.8997 30.6167 23.6497 31.0667C24.2663 31.4334 24.6497 31.6667 25.5663 31.6667C26.483 31.6667 26.8663 31.45 27.483 31.0667C28.233 30.6167 29.2663 30 31.1163 30C32.9663 30 33.9997 30.6167 34.7497 31.0667C35.3663 31.45 35.733 31.6667 36.6663 31.6667V35ZM36.6663 27.5C34.8163 27.5 33.783 26.8834 33.033 26.4334C32.4163 26.0667 32.033 25.8334 31.1163 25.8334C30.183 25.8334 29.8163 26.05 29.1997 26.4334C28.4497 26.8834 27.4163 27.5 25.5663 27.5C23.7163 27.5 22.683 26.8834 21.933 26.4334C21.3163 26.0667 20.933 25.8334 20.0163 25.8334C19.083 25.8334 18.7163 26.05 18.0997 26.4334C17.3497 26.8834 16.3163 27.5 14.4663 27.5C12.6163 27.5 11.583 26.8834 10.833 26.4334C10.2163 26.0667 9.83301 25.8334 8.91634 25.8334C7.99967 25.8334 7.61634 26.05 6.99967 26.4334C6.21634 26.8834 5.18301 27.5 3.33301 27.5V24.1667C4.26634 24.1667 4.63301 23.95 5.24967 23.5667C5.99967 23.1167 7.03301 22.5 8.88301 22.5C10.733 22.5 11.7663 23.1167 12.5163 23.5667C13.133 23.9334 13.5163 24.1667 14.433 24.1667C15.3663 24.1667 15.733 23.95 16.3497 23.5667C17.0997 23.1167 18.133 22.5 19.983 22.5C21.833 22.5 22.8663 23.1167 23.6163 23.5667C24.233 23.9334 24.6163 24.1667 25.533 24.1667C26.4497 24.1667 26.833 23.95 27.4497 23.5667C28.1997 23.1167 29.233 22.5 31.083 22.5C32.933 22.5 33.9663 23.1167 34.7163 23.5667C35.333 23.9334 35.7163 24.1667 36.633 24.1667V27.5H36.6663ZM14.4497 20C15.383 20 15.7497 19.7834 16.3663 19.4C17.133 18.95 18.1663 18.3334 20.0163 18.3334C21.8663 18.3334 22.8997 18.95 23.6497 19.4C24.2663 19.7667 24.6497 20 25.5663 20C26.483 20 26.8663 19.7834 27.483 19.4C27.683 19.2834 27.9163 19.15 28.1663 19.0167L17.4663 8.33335C14.883 5.75002 12.4997 4.98335 8.33301 5.00002V9.16669C11.3663 9.15002 13.1497 9.81669 14.9997 11.6667L16.6663 13.3334L11.2497 18.75C11.7663 18.95 12.183 19.2 12.533 19.4C13.1497 19.7834 13.5163 20 14.4497 20Z" fill="#E9D8FD" />
                            <path d="M27.4997 13.3333C29.8009 13.3333 31.6663 11.4679 31.6663 9.16667C31.6663 6.86548 29.8009 5 27.4997 5C25.1985 5 23.333 6.86548 23.333 9.16667C23.333 11.4679 25.1985 13.3333 27.4997 13.3333Z" fill="#E9D8FD" />
                        </svg>
                    </div>

                </div>

                <div className={styles.infoCard}>
                    <div className={styles.infoCardContent}>
                        <div className={styles.infoCardLabel}>Этаж</div>
                        <div className={styles.infoCardValue}>{floor}</div>
                    </div>
                    <div className={styles.infoCardIcon}>
                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31.6667 8.33333V31.6667H8.33333V8.33333H31.6667ZM33.5 5H6.5C5.66667 5 5 5.66667 5 6.5V33.5C5 34.1667 5.66667 35 6.5 35H33.5C34.1667 35 35 34.1667 35 33.5V6.5C35 5.66667 34.1667 5 33.5 5ZM18.3333 11.6667H28.3333V15H18.3333V11.6667ZM18.3333 18.3333H28.3333V21.6667H18.3333V18.3333ZM18.3333 25H28.3333V28.3333H18.3333V25ZM11.6667 11.6667H15V15H11.6667V11.6667ZM11.6667 18.3333H15V21.6667H11.6667V18.3333ZM11.6667 25H15V28.3333H11.6667V25Z" fill="#E9D8FD" />
                        </svg>
                    </div>

                </div>

                <div className={styles.infoCard}>
                    <div className={styles.infoCardContent}>
                        <div className={styles.infoCardLabel}>Посмотреть</div>
                        <div className={styles.infoCardValue}>на карте</div>
                    </div>
                    <div className={styles.infoCardIcon}>
                        <svg width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9997 23.3333C23.6763 23.3333 26.6663 20.3433 26.6663 16.6667C26.6663 12.99 23.6763 10 19.9997 10C16.323 10 13.333 12.99 13.333 16.6667C13.333 20.3433 16.323 23.3333 19.9997 23.3333ZM19.9997 13.3333C21.838 13.3333 23.333 14.8283 23.333 16.6667C23.333 18.505 21.838 20 19.9997 20C18.1613 20 16.6663 18.505 16.6663 16.6667C16.6663 14.8283 18.1613 13.3333 19.9997 13.3333Z" fill="#E9D8FD" />
                            <path d="M19.0338 36.3566C19.3159 36.558 19.6538 36.6663 20.0005 36.6663C20.3471 36.6663 20.6851 36.558 20.9671 36.3566C21.4738 35.9983 33.3821 27.3999 33.3338 16.6666C33.3338 9.31492 27.3521 3.33325 20.0005 3.33325C12.6488 3.33325 6.66714 9.31492 6.66714 16.6583C6.61881 27.3999 18.5271 35.9983 19.0338 36.3566ZM20.0005 6.66659C25.5155 6.66659 30.0005 11.1516 30.0005 16.6749C30.0355 24.0716 22.6871 30.7133 20.0005 32.8916C17.3155 30.7116 9.96547 24.0683 10.0005 16.6666C10.0005 11.1516 14.4855 6.66659 20.0005 6.66659Z" fill="#E9D8FD" />
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PropertyInfo 