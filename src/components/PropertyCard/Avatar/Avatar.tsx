import clsx from 'clsx'
import React from 'react'
import avatarImg from '../../../assets/icons/avatar.svg'
import type { PropertyCardAvatar } from '../../../types/property'
import styles from './Avatar.module.css'

interface AvatarProps {
    variant: PropertyCardAvatar
}

const Avatar: React.FC<AvatarProps> = ({ variant }) => {
    const getSize = () => {
        switch (variant) {
            case 'small': return 24
            case 'medium': return 30
            default: return 40
        }
    }

    const size = getSize()

    return (
        <img
            className={clsx(styles.avatar, styles[`avatar--${variant}`])}
            src={avatarImg}
            alt="avatar"
            width={size}
            height={size}
        />
    )
}

export default Avatar
