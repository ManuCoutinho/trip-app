import { useRouter } from 'next/router'
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import * as Styled from './styles'
import { MapProps } from './types'

const Map: React.FC<MapProps> = ({ places }) => {
  const { push } = useRouter()
  const icon = new L.Icon({
    iconUrl: '/marker.svg',
    iconSize: [40, 30],
    iconAnchor: [17, 27]
  })
  const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
  const MAPBOX_USER_ID = process.env.NEXT_PUBLIC_MAPBOX_USER_ID
  const MAPBOX_STYLED_ID = process.env.NEXT_PUBLIC_MAPBOX_STYLED_ID

  const CustomTileLayer = () => {
    return MAPBOX_API_KEY ? (
      <TileLayer
        attribution='&copy; <a href="https://apps.mapbox.com/feedback/">Mapbox</a>&copy;
        <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USER_ID}/${MAPBOX_STYLED_ID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      />
    ) : (
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    )
  }
  //todo minzoom and infinite world in mobile view with mapConsumer
  //innerWidth ||document.clientWidth ||body.clientWidth = crossbrowswer
  return (
    <Styled.Wrapper>
      <MapContainer
        center={[31.505, -0.09]}
        zoom={3}
        minZoom={3}
        maxBounds={[
          [-180, 180],
          [180, -180]
        ]}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <CustomTileLayer />
        {places?.map(({ id, location, name, slug }) => {
          const { latitude, longitude } = location
          return (
            <Marker
              key={`place-${id}`}
              position={[latitude, longitude]}
              eventHandlers={{
                click: () => push(`place/${slug}`)
              }}
              icon={icon}
            >
              <Tooltip
                content={name}
                direction='top'
                opacity={1}
                offset={[0, -20]}
              />
            </Marker>
          )
        })}
      </MapContainer>
    </Styled.Wrapper>
  )
}

export default Map
