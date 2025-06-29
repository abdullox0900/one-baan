export type Locale = 'ru' | 'en'

export interface Translations {
	contactSeller: string
	whatsApp: string
	verified: string
	exclusive: string
	specialPrice: string
	furnished: string
	pricePerSqm: string
	noImageAvailable: string
	viewImage: string
	// Amenities translations
	balcony: string
	readyToRent: string
	leasehold: string
	security: string
	mountainView: string
	pool: string
	gym: string
	kidsClub: string
	reception: string
	cctv: string
	security24h: string
	keycard: string
	parking: string
	restaurant: string
	garden: string
	gallery: string
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
		// Amenities translations
		balcony: 'Балкон',
		readyToRent: 'Готово для сдачи в аренду',
		leasehold: 'Форма собственности: Leasehold',
		security: 'Охрана',
		mountainView: 'Вид на горы',
		pool: 'Бассейн',
		gym: 'Фитнес-зал',
		kidsClub: 'Детский клуб',
		reception: 'Ресепшен',
		cctv: 'Видеонаблюдение',
		security24h: 'Охрана 24/7',
		keycard: 'Доступ по карточкам',
		parking: 'Парковка',
		restaurant: 'Ресторан',
		garden: 'Сад для прогулок',
		gallery: 'Фото и план',
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
		// Amenities translations
		balcony: 'Balcony',
		readyToRent: 'Ready to rent',
		leasehold: 'Ownership: Leasehold',
		security: 'Security',
		mountainView: 'Mountain view',
		pool: 'Swimming pool',
		gym: 'Fitness center',
		kidsClub: 'Kids club',
		reception: 'Reception',
		cctv: 'Video surveillance',
		security24h: 'Security 24/7',
		keycard: 'Keycard access',
		parking: 'Parking',
		restaurant: 'Restaurant',
		garden: 'Garden',
		gallery: 'Photo and plan',
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
