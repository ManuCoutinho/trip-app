import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'

import { MapProps } from './types'

const Map: React.FC<MapProps> = ({ places }) => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      scrollWheelZoom={true}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {places?.map(({ id, location, name }) => {
        const { latitude, longitude } = location
        return (
          <Marker key={`place-${id}`} position={[latitude, longitude]}>
            <Tooltip
              content={name}
              direction='top'
              opacity={1}
              offset={[-10, -15]}
            />
          </Marker>
        )
      })}
    </MapContainer>
  )
}

export default Map
