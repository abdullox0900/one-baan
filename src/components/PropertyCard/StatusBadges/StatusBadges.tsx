import clsx from 'clsx'
import React from 'react'
import chairIcon from '../../../assets/icons/status/chair.svg'
import checkIcon from '../../../assets/icons/status/check.svg'
import dollarIcon from '../../../assets/icons/status/dollar.svg'
import starIcon from '../../../assets/icons/status/one-baan.svg'
import { t } from '../../../i18n/translations'

import type { PropertyCardVariant, PropertyStatus } from '../../../types/property'
import styles from './StatusBadges.module.css'

interface StatusBadgesProps {
    status: PropertyStatus
    variant: PropertyCardVariant
}

type BadgeType = 'success' | 'primary' | 'warning' | 'info'

interface Badge {
    key: string
    icon: React.ReactNode
    text: string
    type: BadgeType
}

export const StatusBadges: React.FC<StatusBadgesProps> = ({ status, variant }) => {
    const badges: Badge[] = []

    if (status.isVerified) {
        badges.push({
            key: 'verified',
            icon: <img src={checkIcon} alt="check" />,
            text: t('verified'),
            type: 'success',
        })
    }

    if (status.onlyOnOneBaan) {
        badges.push({
            key: 'exclusive',
            icon: <img src={starIcon} alt="chair" />,
            text: t('exclusive'),
            type: 'primary',
        })
    }

    if (status.specialPrice) {
        badges.push({
            key: 'special-price',
            icon: <img src={dollarIcon} alt="star" />,
            text: t('specialPrice'),
            type: 'warning',
        })
    }

    if (status.isFurnished) {
        badges.push({
            key: 'furnished',
            icon: <img src={chairIcon} alt="home" />,
            text: t('furnished'),
            type: 'info',
        })
    }

    if (badges.length === 0) return null

    return (
        <div className={clsx(styles.badges, styles[`badges--${variant}`])}>
            {badges.map((badge) => (
                <div
                    key={badge.key}
                    className={clsx(styles.badge, styles[`badge--${badge.type}`])}
                >
                    {badge.icon}
                    <span>{badge.text}</span>
                </div>
            ))}
        </div>
    )
}