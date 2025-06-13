import React from 'react'
import avatarImg from '../../../assets/icons/avatar.svg'
import type { PropertyCardAvatar } from '../../../types/property'
import styles from './Avatar.module.css'

interface AvatarProps {
    variant: PropertyCardAvatar
}

const Avatar: React.FC<AvatarProps> = ({ variant }) => {
    return (
        <img className={`${styles.avatar} ${styles[`avatar--${variant}`]}`} src={avatarImg} alt="avatar" width={variant === 'small' ? 24 : variant === 'medium' ? 30 : 40} height={variant === 'small' ? 24 : variant === 'medium' ? 30 : 40} />
    )
}

export default Avatar
