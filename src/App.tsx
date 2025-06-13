import './App.css'
import { PropertyCard } from './components/PropertyCard'
import type { Property } from './types/property'

function App() {

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
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
        alt: 'Modern kitchen',
      },
      {
        id: '3',
        url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      onlyOnOneBaan: true,
      specialPrice: true,
      isFurnished: true,
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
    price: 124200000,
    pricePerSqm: 155200,
    location: 'Пхукет → Бангтао',
    status: {
      isVerified: true,
      onlyOnOneBaan: true,
      specialPrice: true,
      isFurnished: true,
    },
  }

  return (
    <>
      <div>
        <PropertyCard variant="horizontal" isFavorite={false} property={mockPropertyHorizontal} />
      </div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'start', padding: '20px' }}>
        <PropertyCard variant="small" isFavorite={false} property={mockPropertyHorizontal} />
        <PropertyCard variant="medium" isFavorite={false} property={mockPropertyHorizontal} />
        <PropertyCard variant="large" isFavorite={false} property={mockPropertyHorizontal} />
      </div>
      <div>
        <PropertyCard variant="large-horizontal" isFavorite={false} property={mockPropertyHorizontal} />
      </div>
    </>
  )
}

export default App
