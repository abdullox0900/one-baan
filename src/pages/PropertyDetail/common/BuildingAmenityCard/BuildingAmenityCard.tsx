import React, { useEffect, useState } from 'react'
import { PropertyCard } from '../../../../components/PropertyCard/PropertyCard'
import { mockProperty } from '../../../../mock/card'
import styles from './BuildingAmenityCard.module.css'

interface BuildingAmenityCardProps {
    buildingName: string
}

interface PriceRange {
    id: string
    label: string
    min: number
    max: number
}

interface BedroomOption {
    id: string
    label: string
    value: number | null
}

const priceRanges: PriceRange[] = [
    { id: 'all', label: 'Все цены', min: 0, max: Infinity },
    { id: '10-50', label: 'От 10 до 50 млн', min: 10000000, max: 50000000 },
    { id: '50-100', label: 'От 50 до 100 млн', min: 50000000, max: 100000000 },
    { id: '100-plus', label: 'От 100 млн', min: 100000000, max: Infinity },
]

const bedroomOptions: BedroomOption[] = [
    { id: 'all', label: 'Все спальни', value: null },
    { id: '1', label: '1', value: 1 },
    { id: '2', label: '2', value: 2 },
    { id: '3', label: '3', value: 3 },
    { id: '4', label: '4+', value: 4 },
]

const BuildingAmenityCard: React.FC<BuildingAmenityCardProps> = ({
    buildingName,
}) => {
    // State for selected filter
    const [selectedFilter, setSelectedFilter] = useState<'all' | 'recommended'>('all')
    // State for screen width
    const [isMobile, setIsMobile] = useState(false)
    // State for visible cards
    const [visibleCards, setVisibleCards] = useState(4)
    // State for price range dropdown
    const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all')
    // State for bedroom filter
    const [selectedBedrooms, setSelectedBedrooms] = useState<string>('all')
    // State for dropdowns visibility
    const [isDropdownOpen, setIsDropdownOpen] = useState<'price' | 'bedrooms' | null>(null)

    // Effect to check window width
    useEffect(() => {
        const checkWindowWidth = () => {
            setIsMobile(window.innerWidth <= 480)
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

    // Effect to close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const priceDropdown = document.getElementById('priceDropdown')
            const bedroomDropdown = document.getElementById('bedroomDropdown')

            if (!priceDropdown?.contains(event.target as Node) && !bedroomDropdown?.contains(event.target as Node)) {
                setIsDropdownOpen(null)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    // Create mock properties for the card carousel
    const mockProperties = [
        {
            ...mockProperty,
            id: 'property-1',
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
            id: 'property-2',
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
            id: 'property-3',
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
            id: 'property-4',
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
            id: 'property-5',
            price: 150000000,
            title: 'Апартаменты на продажу',
            location: 'Пхукет → Бангтао → Апартаменты',
            features: {
                ...mockProperty.features,
                bedrooms: 4,
            },
        }
    ]

    const handleShowMore = () => {
        setVisibleCards(prev => Math.min(prev + 4, filteredProperties.length))
    }

    // Filter properties based on selected price range, bedrooms and recommended filter
    const filteredProperties = mockProperties.filter(property => {
        const selectedRange = priceRanges.find(range => range.id === selectedPriceRange)
        const selectedBedroomOption = bedroomOptions.find(option => option.id === selectedBedrooms)

        const priceInRange = selectedRange
            ? property.price >= selectedRange.min && property.price <= selectedRange.max
            : true

        const bedroomsMatch = selectedBedroomOption?.value === null ||
            (selectedBedroomOption?.value === 4
                ? property.features.bedrooms >= 4
                : property.features.bedrooms === selectedBedroomOption?.value)

        if (selectedFilter === 'recommended') {
            // Add your recommendation logic here
            // For now, let's consider properties between 50-100M as recommended
            return priceInRange && bedroomsMatch && property.price >= 50000000 && property.price <= 100000000
        }

        return priceInRange && bedroomsMatch
    })

    const handlePriceRangeSelect = (rangeId: string) => {
        setSelectedPriceRange(rangeId)
        setIsDropdownOpen(null)
    }

    const handleBedroomsSelect = (bedroomsId: string) => {
        setSelectedBedrooms(bedroomsId)
        setIsDropdownOpen(null)
    }

    const selectedRangeLabel = priceRanges.find(range => range.id === selectedPriceRange)?.label || 'Все цены'
    const selectedBedroomsLabel = bedroomOptions.find(option => option.id === selectedBedrooms)?.label || 'Все спальни'

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>Еще предложения в {buildingName}</h2>
                <div className={styles.filtersContainer}>
                    <div className={styles.filters}>
                        <div className={styles.dropdown} id="bedroomDropdown">
                            <button
                                className={`${styles.filterButton} ${selectedBedrooms !== 'all' ? styles.active : ''}`}
                                onClick={() => setIsDropdownOpen(isDropdownOpen === 'bedrooms' ? null : 'bedrooms')}
                            >
                                <span className={styles.filterIcon}>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.333 6.37133V2H11.9997V3.33333H3.99967V2H2.66634V6.37133C1.87301 6.83333 1.33301 7.68333 1.33301 8.66667V11.3333C1.33301 11.5101 1.40325 11.6797 1.52827 11.8047C1.65329 11.9298 1.82286 12 1.99967 12H2.66634V14.6667H3.99967V12H11.9997V14.6667H13.333V12H13.9997C14.1765 12 14.3461 11.9298 14.4711 11.8047C14.5961 11.6797 14.6663 11.5101 14.6663 11.3333V8.66667C14.6663 7.68333 14.1257 6.83333 13.333 6.37133ZM11.9997 4.66667V6H8.66634V4.66667H11.9997ZM3.99967 4.66667H7.33301V6H3.99967V4.66667ZM13.333 10.6667H2.66634V8.66667C2.66634 7.93133 3.26434 7.33333 3.99967 7.33333H11.9997C12.735 7.33333 13.333 7.93133 13.333 8.66667V10.6667Z" fill="#2D3748" />
                                    </svg>
                                </span>
                                <span>{selectedBedroomsLabel}</span>
                                <span className={`${styles.filterArrow} ${isDropdownOpen === 'bedrooms' ? styles.filterArrowUp : ''}`}>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.862 6.19531L7.99998 9.05731L5.13798 6.19531L4.19531 7.13798L7.99998 10.9426L11.8046 7.13798L10.862 6.19531Z" fill="#2D3748" />
                                    </svg>
                                </span>
                            </button>
                            {isDropdownOpen === 'bedrooms' && (
                                <div className={styles.dropdownMenu}>
                                    {bedroomOptions.map(option => (
                                        <button
                                            key={option.id}
                                            className={`${styles.dropdownItem} ${selectedBedrooms === option.id ? styles.active : ''}`}
                                            onClick={() => handleBedroomsSelect(option.id)}
                                        >
                                            {option.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className={styles.dropdown} id="priceDropdown">
                            <button
                                className={`${styles.filterButton} ${selectedPriceRange !== 'all' ? styles.active : ''}`}
                                onClick={() => setIsDropdownOpen(isDropdownOpen === 'price' ? null : 'price')}
                            >
                                <span>{selectedRangeLabel}</span>
                                <span className={`${styles.filterArrow} ${isDropdownOpen === 'price' ? styles.filterArrowUp : ''}`}>
                                    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.862 6.19531L7.99998 9.05731L5.13798 6.19531L4.19531 7.13798L7.99998 10.9426L11.8046 7.13798L10.862 6.19531Z" fill="#2D3748" />
                                    </svg>
                                </span>
                            </button>
                            {isDropdownOpen === 'price' && (
                                <div className={styles.dropdownMenu}>
                                    {priceRanges.map(range => (
                                        <button
                                            key={range.id}
                                            className={`${styles.dropdownItem} ${selectedPriceRange === range.id ? styles.active : ''}`}
                                            onClick={() => handlePriceRangeSelect(range.id)}
                                        >
                                            {range.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        className={`${styles.filterButton} ${selectedFilter === 'recommended' ? styles.active : ''}`}
                        onClick={() => setSelectedFilter(selectedFilter === 'recommended' ? 'all' : 'recommended')}
                    >
                        <span className={styles.filterIcon}>
                            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.99967 13.3334L6.66634 10.6667H4.66634V2.66675H3.33301V10.6667H1.33301L3.99967 13.3334ZM7.33301 5.33341H13.333V6.66675H7.33301V5.33341ZM7.33301 8.00008H11.9997V9.33341H7.33301V8.00008ZM7.33301 2.66675H14.6663V4.00008H7.33301V2.66675ZM7.33301 10.6667H10.6663V12.0001H7.33301V10.6667Z" fill="#2D3748" />
                            </svg>
                        </span>
                        <span>Рекомендуемое</span>
                    </button>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.cardsWrapper}>
                    {filteredProperties.slice(0, visibleCards).map((property) => (
                        <div key={property.id} className={styles.cardItem}>
                            <PropertyCard
                                property={property}
                                variant={isMobile ? "horizontal" : "large"}
                                className={styles.buildingCard}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {visibleCards < filteredProperties.length && (
                <button className={styles.showMoreButton} onClick={handleShowMore}>
                    Показать еще
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5895 10.5892L14.4111 9.41083L10.8336 12.9883V5H9.16697V12.9883L5.58947 9.41083L4.41113 10.5892L10.0003 16.1783L15.5895 10.5892Z" fill="#2D3748" />
                    </svg>
                </button>
            )}
        </div>
    )
}

export default BuildingAmenityCard 