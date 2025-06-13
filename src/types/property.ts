export interface PropertyImage {
	id: string
	url: string
	alt: string
}

export interface PropertyCardButton {
	variant: 'default' | 'horizontal'
}

export interface PropertyFeatures {
	bedrooms: number
	bathrooms: number
	area: number
	floor?: string
	view?: string
}

export interface PropertyStatus {
	isVerified?: boolean
	isExclusive?: boolean
	isFurnished?: boolean
	specialPrice?: boolean
	onlyOnOneBaan?: boolean
}

export interface PropertyContact {
	showWhatsApp?: boolean
	showContactSeller?: boolean
	sellerName?: string
	phone?: string
}

export interface Property {
	id: string
	title: string
	price: number
	pricePerSqm?: number
	currency: string
	location: string
	description?: string
	images: PropertyImage[]
	features: PropertyFeatures
	status: PropertyStatus
	contact: PropertyContact
	publishedDate?: string
}

export type PropertyCardAvatar =
	| 'small'
	| 'medium'
	| 'large'
	| 'large-horizontal'
	| 'horizontal'

export type PropertyCardVariant =
	| 'small'
	| 'medium'
	| 'large'
	| 'horizontal'
	| 'large-horizontal'
