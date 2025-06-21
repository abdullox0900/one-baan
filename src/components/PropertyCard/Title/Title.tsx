import clsx from 'clsx'
import type { PropertyCardVariant } from "../../../types/property"
import styles from './Title.module.css'

interface TitleProps {
    variant: PropertyCardVariant
    title?: string
    publishedDate?: string
}

const Title = ({ variant, title, publishedDate = '2 дн. назад' }: TitleProps) => {
    // Skip rendering for horizontal variant
    if (variant === 'horizontal') {
        return null
    }

    // For small and medium variants, show truncated title
    if (variant === 'small' || variant === 'medium') {
        return (
            <h3 className={clsx(styles.title, styles[`title--${variant}`])}>
                {title?.slice(0, 23)}
            </h3>
        )
    }

    // For large and large-horizontal variants, show title with published date
    return (
        <div className={styles.titleContainer}>
            <h3 className={clsx(styles.title, styles[`title--${variant}`])}>
                {title}
            </h3>
            <p className={clsx(styles.subtitle, styles[`subtitle--${variant}`])}>
                {publishedDate}
            </p>
        </div>
    )
}

export default Title
