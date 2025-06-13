import type { Meta, StoryObj } from '@storybook/react'
import type { Property } from '../../types/property'
import { PropertyCard } from './PropertyCard'

const mockProperty: Property = {
    id: '1',
    title: 'Апартаменты на продажу в Blue Canyon Golf And Country Club Home',
    price: 124200000,
    pricePerSqm: 155200,
    currency: 'USD',
    location: 'Пхукет → Бангтао → Апартаменты',
    images: [
        {
            id: '1',
            url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Living room with dining area',
        },
        {
            id: '2',
            url: 'https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Modern kitchen',
        },
        {
            id: '3',
            url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
            alt: 'Bedroom view',
        },
    ],
    features: {
        bedrooms: 2,
        bathrooms: 2,
        area: 2038,
        floor: '3/6 этаж',
        view: 'Вид на горы',
    },
    status: {
        isVerified: true,
        specialPrice: true,
        isFurnished: true,
        onlyOnOneBaan: true,
    },
    contact: {
        showWhatsApp: true,
        showContactSeller: true,
        sellerName: 'Александр',
    },
    publishedDate: '2 дн. назад',
}

const mockPropertyHorizontal: Property = {
    ...mockProperty,
    id: '2',
    price: 1200000,
    pricePerSqm: 15200,
    location: 'Пхукет → Бангтао',
    status: {
        isVerified: true,
        specialPrice: true,
        isFurnished: true,
        onlyOnOneBaan: true,
    },
}

const meta: Meta<typeof PropertyCard> = {
    title: 'Components/PropertyCard',
    component: PropertyCard,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['horizontal', 'large', 'large-horizontal'],
        },
        isFavorite: {
            control: 'boolean',
        },
    },
}

export default meta
type Story = StoryObj<typeof PropertyCard>

export const Small: Story = {
    args: {
        property: mockProperty,
        variant: 'small',
        isFavorite: false,
    },
}

export const Medium: Story = {
    args: {
        property: mockProperty,
        variant: 'medium',
        isFavorite: false,
    },
}

export const Large: Story = {
    args: {
        property: mockProperty,
        variant: 'large',
        isFavorite: false,
    },
}

export const Horizontal: Story = {
    args: {
        property: mockPropertyHorizontal,
        variant: 'horizontal',
        isFavorite: false,
    },
}

export const LargeHorizontal: Story = {
    args: {
        property: mockProperty,
        variant: 'large-horizontal',
        isFavorite: false,
    },
}
