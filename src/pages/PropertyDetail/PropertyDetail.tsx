import { Heart, Share2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import areaImage2 from '../../assets/img/area-slider-img.jpg'
import areaImage from '../../assets/img/area.jpg'
import AgentContactCard from '../../components/AgentContactCard/AgentContactCard'
import BannerGallery from '../../components/BannerGallery'
import MapLocationInfoCard from '../../components/MapLocationInfoCard/MapLocationInfoCard'
import NotificationSubscribeBox from '../../components/NotificationSubscribeBox/NotificationSubscribeBox'
import type { AmenityType } from '../../types/amenities'
import { BuildingAmenityCard, PropertyAmenities, PropertyFeatures, PropertyInfo, SimilarOffers } from './common'
import styles from './PropertyDetail.module.css'

const PropertyDetail: React.FC = () => {
    // Property features for the PropertyFeatures component
    const propertyFeatureTypes: AmenityType[] = [
        'furniture',
        'balcony',
        'readyToRent',
        'leasehold',
        'security',
        'mountainView'
    ]

    // Building amenities for the PropertyAmenities component
    const buildingAmenityTypes: AmenityType[] = [
        'pool',
        'gym',
        'kidsClub',
        'reception',
        'cctv',
        'security24h',
        'keycard',
        'parking',
        'restaurant',
        'garden'
    ]

    // Mock images for the banner gallery
    const bannerImages = [
        { url: areaImage, alt: 'Property Area 1' },
        { url: areaImage2, alt: 'Property Area 2' },
        { url: areaImage2, alt: 'Property Area 3' },
    ]

    // State to track window width for responsive design
    const [isMobile, setIsMobile] = useState(false)

    // Effect to check window width on mount and resize
    useEffect(() => {
        const checkWindowWidth = () => {
            setIsMobile(window.innerWidth <= 830)
        }

        // Initial check
        checkWindowWidth()

        // Add event listener for window resize
        window.addEventListener('resize', checkWindowWidth)

        // Cleanup
        return () => {
            window.removeEventListener('resize', checkWindowWidth)
        }
    }, [])

    return (
        <div>
            {/* Full-width banner */}
            <div className={styles.banner}>
                {isMobile ? (
                    <BannerGallery images={bannerImages} className={styles.bannerGallery} />
                ) : (
                    <img src={areaImage} alt="Property Area" className={styles.bannerImage} />
                )}
                <div className={styles.bannerOverlay}>
                    <div className={styles.bannerContent}>
                        <Link to="/" className={styles.backButton}>
                            <svg className={styles.backButtonIcon} width={13} height={12} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9996 5.33339H3.27563L6.8043 1.80473L5.86163 0.862061L0.723633 6.00006L5.86163 11.1381L6.8043 10.1954L3.27563 6.66673H12.9996V5.33339Z" fill="#2D3748" />
                            </svg>
                            <span className={styles.backButtonText}>Вернуться</span>
                        </Link>
                        <div className={styles.shareButton}>
                            <svg className={styles.shareButtonIcon} width={40} height={40} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width={40} height={40} rx={20} fill="white" />
                                <path d="M11.5463 23.1593C10.8619 23.5902 10.461 23.8612 10.0446 24.103C9.51466 24.4092 8.89873 24.688 8.48029 24.0523C8.06185 23.4167 8.43141 22.9019 9.03561 22.5334C9.6398 22.1649 10.1638 21.7534 10.7622 21.4317C11.3605 21.11 11.5619 20.6635 11.556 20.0083C11.5345 17.4091 11.5404 14.81 11.556 12.2088C11.556 10.6782 11.7653 10.4891 13.3158 10.4871C16.4756 10.4871 19.6374 10.5222 22.7972 10.4754C25.2434 10.4384 27.2495 11.1676 28.3543 13.4821C29.4278 15.7303 28.9135 17.7718 27.2378 19.708C27.9711 20.1955 28.6769 20.683 29.4043 21.147C32.1046 22.8493 33.3365 25.3275 33.1801 28.4649C33.008 31.8693 31.3323 34.3379 28.147 35.5877C26.6022 36.1839 24.9901 36.5898 23.3467 36.7966C18.169 37.4635 13.3393 36.5529 9.22136 33.1309C5.4567 30.0059 3.39708 25.9931 3.04251 21.0924C2.4344 12.554 8.41577 4.99044 16.7944 3.3194C26.2073 1.43973 35.5284 8.06928 36.8268 17.6061C36.9206 18.31 36.9636 19.0236 36.9969 19.7353C37.0262 20.3456 36.858 20.8799 36.1209 20.8799C35.4189 20.8799 35.1706 20.3924 35.1686 19.7685C35.1686 17.2785 34.4921 14.9679 33.3326 12.7763C30.5384 7.50967 24.1171 4.15395 18.2941 4.94949C11.6929 5.85423 6.36658 10.684 5.13667 16.8612C3.4414 25.4406 8.94175 33.5501 17.6215 34.9306C20.9455 35.4571 24.3244 35.2836 27.5037 33.8738C29.9831 32.7741 31.2677 30.8067 31.3733 28.1529C31.4672 25.7897 30.3605 23.9743 28.3856 22.6933C25.9571 21.1119 23.5148 19.554 21.1039 17.9492C20.5349 17.571 20.1106 17.5378 19.5279 17.9317C17.7505 19.1328 15.9047 20.2481 14.1449 21.4727C13.957 21.6281 13.8023 21.8194 13.6898 22.0354C13.5773 22.2514 13.5093 22.4877 13.4899 22.7303C13.4136 24.417 13.4625 26.1094 13.4527 27.8C13.4527 28.1548 13.5133 28.5799 13.3491 28.849C13.1535 29.1844 12.7625 29.5685 12.4281 29.6036C12.1817 29.6289 11.689 29.1473 11.646 28.8412C11.5189 27.9813 11.556 27.0863 11.5463 26.2206C11.5384 25.2885 11.5463 24.3604 11.5463 23.1593ZM13.4742 19.6495C15.5508 18.3061 17.4201 17.1401 19.2385 15.8999C20.0089 15.3754 20.6386 15.4144 21.3738 15.9253C22.5196 16.7228 23.7202 17.4345 24.8699 18.2378C25.4193 18.6278 25.8163 18.5557 26.1897 18.0662C26.9836 17.025 27.3629 15.896 26.8291 14.615C26.2953 13.3339 25.3881 12.4077 24.0056 12.359C20.7226 12.2732 17.4318 12.318 14.1449 12.359C13.92 12.359 13.5094 12.749 13.5035 12.9693C13.4547 15.1005 13.4742 17.2336 13.4742 19.6398V19.6495Z" fill="#171923" />
                            </svg>
                        </div>
                        <div className={styles.actionButtons}>
                            <button className={styles.actionButton} aria-label="Add to favorites">
                                <Heart size={24} />
                            </button>
                            <button className={styles.actionButton} aria-label="Share property">
                                <Share2 size={24} />
                            </button>
                        </div>
                    </div>
                    <div className={styles.photoAndPlan}>Фото и план</div>

                </div>
            </div>

            <div className={styles.container}>
                {/* Property Info Section */}
                <section className={styles.infoSection}>
                    <div className={styles.infoContainer}>
                        <div className={styles.leftColumn}>
                            <PropertyInfo
                                title="Апартаменты на продажу в Blue Canyon Golf And Country Club Home"
                                price="$1,200,000"
                                pricePerMeter="$15,200"
                                bedrooms={2}
                                bathrooms={2}
                                area={2038}
                                constructionYear={2025}
                                distanceToSea={500}
                                floor="5 из 10"
                                path={["Пхукет", "БангТао", "Апартаменты"]}
                            />

                            {/* Property Features Component */}
                            <PropertyFeatures
                                description="Комплекс находится в шаговой доступности до моря, на ресепшене можно организовать ее полное обслуживание. Эта угловая квартира, более светлая и с меньшим количеством соседей."
                                amenityTypes={propertyFeatureTypes}
                                daysOnPlatform={137}
                                viewCount={547}
                            />

                            {/* Property Amenities Component */}
                            <PropertyAmenities
                                buildingName="Blue Canyon Golf And Country Club Home"
                                buildingInfo={{
                                    constructionYear: 2022,
                                    totalUnits: 232,
                                    developer: "Sino-Thai Engineering & Construction"
                                }}
                                amenityTypes={buildingAmenityTypes}
                            />

                            {/* Building Amenity Card using PropertyCard component */}
                            <BuildingAmenityCard
                                buildingName="Blue Canyon Golf And Country Club Home"
                            />

                            <div className={styles.notificationSubscribeBox}>
                                <NotificationSubscribeBox />
                            </div>

                            <div className={styles.mapLocationInfoCard}>
                                <MapLocationInfoCard />
                            </div>

                            <div className={styles.agentContactCard}>
                                <AgentContactCard />
                            </div>

                            <div className={styles.similarProperties}>
                                <SimilarOffers />
                            </div>
                        </div>


                        {/* Right Column - Contact Info */}
                        <div className={styles.rightColumn}>
                            <AgentContactCard />
                        </div>
                    </div>
                </section>
            </div>

            <div className={styles.footer}>

            </div>
        </div>
    )
}

export default PropertyDetail 