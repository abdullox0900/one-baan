import React from 'react'
import chairIcon from '../../../assets/icons/status/chair.svg'
import checkIcon from '../../../assets/icons/status/check.svg'
import dollarIcon from '../../../assets/icons/status/dollar.svg'
import starIcon from '../../../assets/icons/status/one-baan.svg'

import type { PropertyCardVariant, PropertyStatus } from '../../../types/property'
import styles from './StatusBadges.module.css'

interface StatusBadgesProps {
    status: PropertyStatus
    variant: PropertyCardVariant
}

export const StatusBadges: React.FC<StatusBadgesProps> = ({ status, variant }) => {
    const badges = []

    if (status.isVerified) {
        badges.push({
            key: 'verified',
            icon: <img src={checkIcon} alt="check" />,
            text: 'Объект проверен',
            type: 'success' as const,
        })
    }

    if (status.onlyOnOneBaan) {
        badges.push({
            key: 'exclusive',
            icon: <img src={starIcon} alt="chair" />,
            text: 'Только на OneBaan',
            type: 'primary' as const,
        })
    }

    if (status.specialPrice) {
        badges.push({
            key: 'special-price',
            icon: <img src={dollarIcon} alt="star" />,
            text: 'Выгодная цена',
            type: 'warning' as const,
        })
    }

    if (status.isFurnished) {
        badges.push({
            key: 'furnished',
            icon: <img src={chairIcon} alt="home" />,
            text: 'С мебелью',
            type: 'info' as const,
        })
    }



    if (badges.length === 0) return null

    return (
        <div className={`${styles.badges} ${styles[`badges--${variant}`]}`}>
            {badges.map((badge) => (
                <div
                    key={badge.key}
                    className={`${styles.badge} ${styles[`badge--${badge.type}`]}`}
                >
                    {badge.icon}
                    <span>{badge.text}</span>
                </div>
            ))}
        </div>
    )
}