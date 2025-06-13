import type { PropertyCardVariant } from "../../../types/property"
import styles from './Title.module.css'

interface TitleProps {
    variant: PropertyCardVariant
    title?: string
}

const Title = ({ variant, title }: TitleProps) => {
    return (
        <>
            {
                variant === 'small' || variant === 'medium' ? (
                    <h3 className={`${styles.title} ${styles[`title--${variant}`]}`}>
                        {title?.slice(0, 23)}
                    </h3>
                ) : (
                    variant === 'large-horizontal' || variant === 'large' ? (
                        <div className={styles.titleContainer}>
                            <h3 className={`${styles.title} ${styles[`title--${variant}`]}`}>
                                {title}
                            </h3>

                            <p className={`${styles.subtitle} ${styles[`subtitle--${variant}`]}`}>
                                2 дн. назад
                            </p>
                        </div>
                    ) : (
                        <></>
                    )
                )
            }
        </>
    )
}

export default Title
