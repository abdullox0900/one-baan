import locationIcon from '../../assets/icons/locationIcon.svg'
import styles from './MapLocationInfoCard.module.css'

const MapLocationInfoCard = () => {
    return (
        <div className={styles.mapLocationInfoCard}>
            <h3 className={styles.mapLocationInfoCard__title}>Локация</h3>
            <div className={styles.mapLocationInfoCard__box}>
                <div className={styles.mapLocationInfoCard__content}>

                    <div className={styles.mapLocationInfoCard__contentItem}>
                        <img src={locationIcon} alt="" />
                        <div className={styles.mapLocationInfoCard__contentItemText}>
                            <div className={styles.mapLocationInfoCard__contentItemTextTitle}>Таиланд </div>
                            <div className={styles.mapLocationInfoCard__contentItemTextSubtitle}>Пхукет → Пляж Багтао</div>
                        </div>
                    </div>
                    <a href="" className={styles.mapLocationInfoCard__contentLink}>Смотреть на карте
                        <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.41083 14.7852L10.5892 15.9635L16.1783 10.3743L10.5892 4.78516L9.41083 5.96349L12.9883 9.54099H5V11.2077H12.9883L9.41083 14.7852Z" fill="#2D3748" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MapLocationInfoCard