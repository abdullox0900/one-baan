import type { Meta, StoryObj } from '@storybook/react'
import type { AmenityType } from '../../types/amenities'
import { getAmenities } from '../../utils/amenities'
import { AmenitiesTags } from './AmenitiesTags'

const meta: Meta<typeof AmenitiesTags> = {
    title: 'Components/AmenitiesTags',
    component: AmenitiesTags,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AmenitiesTags>

// Primary amenities example
const primaryAmenities: AmenityType[] = [
    'furniture',
    'balcony',
    'readyToRent',
    'leasehold',
    'security',
    'mountainView'
]

// Secondary amenities example
const secondaryAmenities: AmenityType[] = [
    'pool',
    'gym',
    'kidsClub',
    'reception',
    'cctv',
    'security24h'
]

export const Regular: Story = {
    args: {
        amenities: getAmenities(primaryAmenities),
        isCompact: false,
    },
}

export const Compact: Story = {
    args: {
        amenities: getAmenities(secondaryAmenities),
        isCompact: true,
    },
}

export const SingleAmenity: Story = {
    args: {
        amenities: getAmenities(['furniture']),
        isCompact: false,
    },
} 