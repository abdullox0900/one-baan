import { Link } from 'react-router-dom'
import './App.css'
import AgentContactCard from './components/AgentContactCard/AgentContactCard'
import AmenitiesTags from './components/AmenitiesTags'
import MapLocationInfoCard from './components/MapLocationInfoCard/MapLocationInfoCard'
import NotificationSubscribeBox from './components/NotificationSubscribeBox/NotificationSubscribeBox'
import type { AmenityType } from './types/amenities'
import { getAmenities } from './utils/amenities'

function App() {
  // Example primary amenities (from first image)
  const primaryAmenities: AmenityType[] = [
    'furniture',
    'balcony',
    'readyToRent',
    'leasehold',
    'security',
    'mountainView'
  ]

  // Example secondary amenities (from second image)
  const secondaryAmenities: AmenityType[] = [
    'pool',
    'gym',
    'kidsClub',
    'reception',
    'cctv',
    'security24h',
    'keycard',
    'parking',
    'restaurant',
    'garden'
  ]

  return (
    <>
      <div className="app-container">
        <h1>One Baan Demo</h1>

        <div className="navigation">
          <Link to="/property/123" className="property-link">
            View Property Detail Page
          </Link>
        </div>

        <div className="demo-section">
          <h2>Amenities Tags Component</h2>
          <AmenitiesTags amenities={getAmenities(primaryAmenities)} />
        </div>

        <div className="demo-section">
          <h2>Compact Amenities Tags</h2>
          <AmenitiesTags
            amenities={getAmenities(secondaryAmenities)}
            isCompact={true}
          />
        </div>

        <NotificationSubscribeBox />
        <MapLocationInfoCard />
        <AgentContactCard />
      </div>
    </>
  )
}

export default App
