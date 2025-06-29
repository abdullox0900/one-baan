import { useState } from 'react'
import notificationCheckIcon from '../../assets/icons/notification-check.svg'
import Modal from '../Modal/Modal'
import styles from './NotificationSubscribeBox.module.css'

const NotificationSubscribeBox = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <>
            <div className={styles.notificationSubscribeBox}>
                <div className={styles.notificationSubscribeBox__title}>
                    <h3>Подпишитесь на уведомления</h3>
                </div>
                <ul className={styles.notificationSubscribeBox__list}>
                    <li className={styles.notificationSubscribeBox__item}>
                        <img src={notificationCheckIcon} alt="check" />
                        <p className={styles.notificationSubscribeBox__itemTitle}>Новые предложение в Blue Canyon Golf And Country Club Home</p>
                    </li>
                    <li className={styles.notificationSubscribeBox__item}>
                        <img src={notificationCheckIcon} alt="check" />
                        <p className={styles.notificationSubscribeBox__itemTitle}>Новые предложение в Blue Canyon Golf And Country Club Home</p>
                    </li>
                </ul>
                <button className={styles.notificationSubscribeBox__button} onClick={openModal}>
                    Подписаться
                    <svg width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.41083 14.7852L10.5892 15.9635L16.1783 10.3743L10.5892 4.78516L9.41083 5.96349L12.9883 9.54099H5V11.2077H12.9883L9.41083 14.7852Z" fill="#553C9A" />
                    </svg>
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className={styles.modalContent}>
                    <h3 className={styles.modalTitle}>Подписка на уведомления</h3>
                    <p className={styles.modalDescription}>Мы обязательно напишем Вам, когда появятся новые предложения или скидки на существующие</p>
                    <div className={styles.modalForm}>
                        <div className={styles.modalForm__input}>
                            <svg className={styles.modalForm__inputIcon} width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.334 2.6665H2.66732C1.93198 2.6665 1.33398 3.2645 1.33398 3.99984V11.9998C1.33398 12.7352 1.93198 13.3332 2.66732 13.3332H13.334C14.0693 13.3332 14.6673 12.7352 14.6673 11.9998V3.99984C14.6673 3.2645 14.0693 2.6665 13.334 2.6665ZM13.334 3.99984V4.3405L8.00065 8.48917L2.66732 4.34117V3.99984H13.334ZM2.66732 11.9998V6.02917L7.59132 9.85917C7.70806 9.95087 7.8522 10.0007 8.00065 10.0007C8.1491 10.0007 8.29325 9.95087 8.40998 9.85917L13.334 6.02917L13.3353 11.9998H2.66732Z" fill="#A0AEC0" />
                            </svg>

                            <input type="email" placeholder="Ваш email" className={styles.modalInput} />
                        </div>
                        <button className={styles.modalSubmitButton}>
                            Подписаться
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default NotificationSubscribeBox
