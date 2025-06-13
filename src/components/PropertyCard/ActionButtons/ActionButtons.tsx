import React from 'react'
import PhoneIcon from '../../../assets/icons/call-icon.svg'
import type { Property, PropertyCardVariant } from '../../../types/property'
import styles from './ActionButtons.module.css'

interface ActionButtonsProps {
    property: Property
    variant: PropertyCardVariant
    onWhatsAppClick: () => void
    onContactClick: () => void
    phone: string
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
    property,
    variant,
    onWhatsAppClick,
    onContactClick,
    phone
}) => {
    return (
        <>
            {variant === 'small' || variant === 'medium' || variant === 'large' ? (
                <div className={`${styles.actions} ${styles[`actions--${variant}`]}`}>
                    {property.contact.showContactSeller && (
                        <a
                            href={`tel:${phone}`}
                            className={`${styles.button} ${styles.contactButton}`}
                            onClick={(e) => {
                                e.preventDefault()
                                onContactClick()
                            }}
                        >
                            <img src={PhoneIcon} alt="Phone" />
                        </a>
                    )}
                    {property.contact.showWhatsApp && (
                        <a
                            href={`https://wa.me/${phone}`}
                            className={`${styles.button} ${styles.whatsappButton} ${styles[`actions--${variant}`]}`}
                            onClick={(e) => {
                                e.preventDefault()
                                onWhatsAppClick()
                            }}
                        >
                            <span>WhatsApp</span>
                        </a>
                    )}
                </div>
            ) : (
                <></>
            )}

            {variant === 'large-horizontal' && (
                <div className={`${styles.actions} ${styles[`actions--${variant}`]}`}>
                    {property.contact.showContactSeller && (
                        <a
                            href={`tel:${phone}`}
                            className={`${styles.button} ${styles.contactButton}`}
                            onClick={(e) => {
                                e.preventDefault()
                                onContactClick()
                            }}
                        >
                            <span>
                                Связаться с продавцом
                            </span>
                        </a>
                    )}
                    {property.contact.showWhatsApp && (
                        <a
                            href={`https://wa.me/${phone}`}
                            className={`${styles.button} ${styles.whatsappButton}`}
                            onClick={(e) => {
                                e.preventDefault()
                                onWhatsAppClick()
                            }}
                        >
                            <span>WhatsApp</span>
                        </a>
                    )}


                </div>
            )}

            {variant === 'horizontal' && (
                <></>
            )}
        </>
    )
}