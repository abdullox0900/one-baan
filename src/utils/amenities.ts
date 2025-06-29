import type { FC, SVGProps } from 'react'
import type { Translations } from '../i18n/translations'
import { t } from '../i18n/translations'
import type { AmenityType } from '../types/amenities'

// Import SVG components
import {
	CardAccessIcon,
	FurnishedIcon,
	GymIcon,
	KidsClubIcon,
	MountainViewIcon,
	OwnershipLeaseholdIcon,
	ParkingIcon,
	ReceptionIcon,
	RentalReadyIcon,
	RestaurantIcon,
	Security24_7,
	SecurityIcon,
	SwimmingPoolIcon,
	VideoSurveillanceIcon,
	WalkingGardenIcon,
} from '../assets/icons/AmenitiesIcon'

const amenitiesMap: Record<
	AmenityType,
	{ icon: FC<SVGProps<SVGSVGElement>>; labelKey: keyof Translations }
> = {
	furniture: { icon: FurnishedIcon, labelKey: 'furnished' },
	balcony: { icon: FurnishedIcon, labelKey: 'balcony' },
	readyToRent: { icon: RentalReadyIcon, labelKey: 'readyToRent' },
	leasehold: { icon: OwnershipLeaseholdIcon, labelKey: 'leasehold' },
	security: { icon: SecurityIcon, labelKey: 'security' },
	mountainView: { icon: MountainViewIcon, labelKey: 'mountainView' },
	pool: { icon: SwimmingPoolIcon, labelKey: 'pool' },
	gym: { icon: GymIcon, labelKey: 'gym' },
	kidsClub: { icon: KidsClubIcon, labelKey: 'kidsClub' },
	reception: { icon: ReceptionIcon, labelKey: 'reception' },
	cctv: { icon: VideoSurveillanceIcon, labelKey: 'cctv' },
	security24h: { icon: Security24_7, labelKey: 'security24h' },
	keycard: { icon: CardAccessIcon, labelKey: 'keycard' },
	parking: { icon: ParkingIcon, labelKey: 'parking' },
	restaurant: { icon: RestaurantIcon, labelKey: 'restaurant' },
	garden: { icon: WalkingGardenIcon, labelKey: 'garden' },
}

export interface Amenity {
	id: string
	type: AmenityType
	icon: FC<SVGProps<SVGSVGElement>>
	label: string
}

/**
 * Get an amenity object from its type
 * @param type The amenity type
 * @returns Amenity object
 */
export const getAmenity = (type: AmenityType): Amenity => {
	const amenityInfo = amenitiesMap[type]

	if (!amenityInfo) {
		throw new Error(`Unknown amenity type: ${type}`)
	}

	return {
		id: type,
		type,
		icon: amenityInfo.icon,
		label: t(amenityInfo.labelKey),
	}
}

/**
 * Get multiple amenities from their types
 * @param types Array of amenity types
 * @returns Array of Amenity objects
 */
export const getAmenities = (types: AmenityType[]): Amenity[] => {
	return types.map(getAmenity)
}
