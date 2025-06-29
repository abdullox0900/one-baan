import React from 'react'
import { PropertyCard } from '../../../../components/PropertyCard/PropertyCard'
import { mockProperty } from '../../../../mock/card'
import styles from './SimilarOffers.module.css'

const SimilarOffers: React.FC = () => {
    const mockProperties = [
        {
            ...mockProperty,
            id: 'similar-1',
            price: 70200000,
            title: 'Апартаменты на продажу',
            location: 'Пхукет → Бангтао → Апартаменты',
            features: {
                ...mockProperty.features,
                area: 2038,
                floor: '3/6 этаж',
                view: 'Вид на горы',
                bedrooms: 2,
            },
        },
        {
            ...mockProperty,
            id: 'similar-2',
            price: 124200000,
            title: 'Апартаменты на продажу',
            location: 'Пхукет → Бангтао → Апартаменты',
            features: {
                ...mockProperty.features,
                bedrooms: 3,
            },
        },
        {
            ...mockProperty,
            id: 'similar-3',
            price: 45000000,
            title: 'Апартаменты на продажу',
            location: 'Пхукет → Бангтао → Апартаменты',
            features: {
                ...mockProperty.features,
                bedrooms: 1,
            },
        },
        {
            ...mockProperty,
            id: 'similar-4',
            price: 85000000,
            title: 'Апартаменты на продажу',
            location: 'Пхукет → Бангтао → Апартаменты',
            features: {
                ...mockProperty.features,
                bedrooms: 2,
            },
        },
        {
            ...mockProperty,
            id: 'similar-5',
            price: 150000000,
            title: 'Апартаменты на продажу',
            location: 'Пхукет → Бангтао → Апартаменты',
            features: {
                ...mockProperty.features,
                bedrooms: 4,
            },
        }
    ]

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Похожие предложения</h2>
                <div className={styles.location}>
                    <div className={styles.locationItem}>Бангтао</div>
                    <div className={styles.locationItem}>Апартаменты</div>
                    <div className={styles.locationItem}>1 спальня</div>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.cardsWrapper}>
                    {mockProperties.map((property) => (
                        <div key={property.id} className={styles.cardItem}>
                            <PropertyCard
                                property={property}
                                variant={"large"}
                                className={styles.buildingCard}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SimilarOffers 