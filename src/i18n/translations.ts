export type Locale = 'ru' | 'en'

interface Translations {
	contactSeller: string
	whatsApp: string
	verified: string
	exclusive: string
	specialPrice: string
	furnished: string
	pricePerSqm: string
	noImageAvailable: string
	viewImage: string
}

const translations: Record<Locale, Translations> = {
	ru: {
		contactSeller: 'Связаться с продавцом',
		whatsApp: 'WhatsApp',
		verified: 'Объект проверен',
		exclusive: 'Только на OneBaan',
		specialPrice: 'Выгодная цена',
		furnished: 'С мебелью',
		pricePerSqm: 'за м²',
		noImageAvailable: 'Нет изображения',
		viewImage: 'Просмотреть изображение',
	},
	en: {
		contactSeller: 'Contact seller',
		whatsApp: 'WhatsApp',
		verified: 'Verified property',
		exclusive: 'Only on OneBaan',
		specialPrice: 'Special price',
		furnished: 'Furnished',
		pricePerSqm: 'per sqm',
		noImageAvailable: 'No image available',
		viewImage: 'View image',
	},
}

// Default locale
let currentLocale: Locale = 'ru'

export const setLocale = (locale: Locale) => {
	currentLocale = locale
}

export const getLocale = (): Locale => {
	return currentLocale
}

export const t = (key: keyof Translations): string => {
	return translations[currentLocale][key]
}

export default translations
