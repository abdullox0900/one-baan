import styles from './AgentContactCard.module.css'

const AgentContactCard = () => {
    return (
        <>
            <div className={styles.agentContactCard}>
                <div className={styles.agentContactCard__topBox}>
                    <a href="" className={styles.agentContactCard__topBoxLink + ' ' + styles.agentContactCard__topBoxLinkContact}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.15826 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.16381 3.69101C7.91708 3.40694 7.59547 3.19794 7.23568 3.08785C6.94859 3 6.62446 3 5.97621 3C5.02791 3 4.55376 3 4.15573 3.18229C3.68687 3.39702 3.26344 3.86328 3.09473 4.3506C2.95151 4.76429 2.99254 5.18943 3.07458 6.0397C3.94791 15.0902 8.90982 20.0521 17.9603 20.9254C18.8106 21.0075 19.2358 21.0485 19.6494 20.9053C20.1368 20.7366 20.603 20.3131 20.8178 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0824 15.6393 19.7862 15.5077 19.1938 15.2444L18.2878 14.8417C17.6463 14.5566 17.3255 14.4141 16.9996 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5064 14.8544 14.967 15.3038C14.4302 15.7512 14.1618 15.9749 13.8338 16.0947C13.543 16.2009 13.1586 16.2403 12.8524 16.1951C12.5069 16.1442 12.2424 16.0029 11.7133 15.7201C10.0673 14.8405 9.15953 13.9328 8.27987 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64662 7.3124 9.61695 7.00048C9.58594 6.67452 9.44338 6.35376 9.15826 5.71223Z" fill="white" />
                        </svg>
                    </a>
                    <a href="" className={styles.agentContactCard__topBoxLink}>WhatsApp</a>
                </div>

                <div className={styles.agentContactCard__bottomBoxInfoTitleTablet}>Листинг предоставлен</div>


                <div className={styles.agentContactCard__bottomBoxContainer}>
                    <div className={styles.agentContactCard__bottomBox}>
                        <div className={styles.agentContactCard__bottomBoxAvatar}>А</div>
                        <div className={styles.agentContactCard__bottomBoxInfo}>
                            <div className={styles.agentContactCard__bottomBoxInfoTitle}>Листинг предоставлен</div>
                            <div className={styles.agentContactCard__bottomBoxInfoItemName}>Apart Homes Pattaya Incorpor...</div>
                            <div className={styles.agentContactCard__bottomBoxInfoItem}>
                                <span className={styles.agentContactCard__bottomBoxInfoItemIcon}></span>
                                <span>онлайн</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.agentContactCard__bottomBoxExperience}>
                        <div className={styles.agentContactCard__bottomBoxExperienceItem}>
                            <div>Опыт на Пхукете:</div>
                            <span>6 лет</span>
                        </div>
                        <div className={styles.agentContactCard__bottomBoxExperienceItem}>
                            <div>Время работы по Пхукету:</div>
                            <span>09:00 - 18:00</span>
                        </div>
                        <div className={styles.agentContactCard__bottomBoxExperienceItem}>
                            <div>Языки:</div>
                            <span>Английский, Русский, Тайский</span>
                        </div>
                    </div>
                </div>

                <div className={styles.agentContactCard__bottomBoxButton}>Смотреть все предложения (8)</div>
            </div>

            <div className={styles.agentContactBar}>
                <div className={styles.agentContactBar__left}>
                    <div className={styles.agentContactCard__bottomBoxAvatar}>А</div>
                    <div className={styles.agentContactBar__leftInfo}>
                        <div className={styles.agentContactCard__bottomBoxInfoItemName}>Apart Homes Pattaya Incorpor...</div>

                        <div className={styles.agentContactCard__bottomBoxInfoItem}>
                            <span className={styles.agentContactCard__bottomBoxInfoItemIcon}></span>
                            <span>онлайн</span>
                        </div>
                    </div>
                </div>
                <div className={styles.agentContactCard__topBox}>
                    <a href="" className={styles.agentContactCard__topBoxLink + ' ' + styles.agentContactCard__topBoxLinkContact}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.15826 5.71223L8.7556 4.80625C8.49232 4.21388 8.36068 3.91768 8.16381 3.69101C7.91708 3.40694 7.59547 3.19794 7.23568 3.08785C6.94859 3 6.62446 3 5.97621 3C5.02791 3 4.55376 3 4.15573 3.18229C3.68687 3.39702 3.26344 3.86328 3.09473 4.3506C2.95151 4.76429 2.99254 5.18943 3.07458 6.0397C3.94791 15.0902 8.90982 20.0521 17.9603 20.9254C18.8106 21.0075 19.2358 21.0485 19.6494 20.9053C20.1368 20.7366 20.603 20.3131 20.8178 19.8443C21 19.4462 21 18.9721 21 18.0238C21 17.3755 21 17.0514 20.9122 16.7643C20.8021 16.4045 20.5931 16.0829 20.309 15.8362C20.0824 15.6393 19.7862 15.5077 19.1938 15.2444L18.2878 14.8417C17.6463 14.5566 17.3255 14.4141 16.9996 14.3831C16.6876 14.3534 16.3731 14.3972 16.0811 14.5109C15.776 14.6297 15.5064 14.8544 14.967 15.3038C14.4302 15.7512 14.1618 15.9749 13.8338 16.0947C13.543 16.2009 13.1586 16.2403 12.8524 16.1951C12.5069 16.1442 12.2424 16.0029 11.7133 15.7201C10.0673 14.8405 9.15953 13.9328 8.27987 12.2867C7.99714 11.7577 7.85578 11.4931 7.80487 11.1477C7.75974 10.8414 7.79908 10.457 7.9053 10.1663C8.02512 9.83828 8.24881 9.56986 8.69619 9.033C9.14562 8.49368 9.37034 8.22402 9.48915 7.91891C9.60285 7.62694 9.64662 7.3124 9.61695 7.00048C9.58594 6.67452 9.44338 6.35376 9.15826 5.71223Z" fill="white" />
                        </svg>
                    </a>
                    <a href="" className={styles.agentContactCard__topBoxLink}>WhatsApp</a>
                </div>
            </div>

        </>
    )
}

export default AgentContactCard
