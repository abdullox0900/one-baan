import clsx from 'clsx'
import React from 'react'
import PhoneIcon from '../../../assets/icons/call-icon.svg'
import { t } from '../../../i18n/translations'
import type { PropertyCardVariant, PropertyContact } from '../../../types/property'
import styles from './ActionButtons.module.css'

interface ActionButtonsProps {
    contact: PropertyContact
    variant: PropertyCardVariant
    onWhatsAppClick: () => void
    onContactClick: () => void
    phone: string
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
    contact,
    variant,
    onWhatsAppClick,
    onContactClick,
    phone
}) => {
    // Skip rendering for horizontal variant which doesn't have action buttons
    if (variant === 'horizontal') {
        return null
    }

    return (
        <div className={clsx(styles.actions, styles[`actions--${variant}`])}>
            {contact.showContactSeller && (
                <a
                    href={`tel:${phone}`}
                    className={clsx(styles.button, styles.contactButton)}
                    onClick={(e) => {
                        e.preventDefault()
                        onContactClick()
                    }}
                >
                    {variant === 'large-horizontal' ? (
                        <span>{t('contactSeller')}</span>
                    ) : (
                        <img src={PhoneIcon} alt="Phone" />
                    )}
                </a>
            )}
            {contact.showWhatsApp && (
                <a
                    href={`https://wa.me/${phone}`}
                    className={clsx(
                        styles.button,
                        styles.whatsappButton,
                        variant !== 'large-horizontal' && styles[`actions--${variant}`]
                    )}
                    onClick={(e) => {
                        e.preventDefault()
                        onWhatsAppClick()
                    }}
                >
                    <span>{t('whatsApp')}</span>
                </a>
            )}
        </div>
    )
}