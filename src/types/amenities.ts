export interface Amenity {
	id: string
	icon: React.FC<React.SVGProps<SVGSVGElement>>
	label: string
}

export type AmenityType =
	| 'furniture'
	| 'balcony'
	| 'readyToRent'
	| 'leasehold'
	| 'security'
	| 'mountainView'
	| 'pool'
	| 'gym'
	| 'kidsClub'
	| 'reception'
	| 'cctv'
	| 'security24h'
	| 'keycard'
	| 'parking'
	| 'restaurant'
	| 'garden'
