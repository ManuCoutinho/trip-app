import { MapProps } from 'components/Map/types'

export default {
  places: [
    {
      id: 'first-place',
      name: 'Rio de Janeiro',
      slug: 'rio-de-janeiro',
      location: {
        latitude: -22.925453,
        longitude: -43.277763
      }
    },
    {
      id: 'second-place',
      name: 'Lagos',
      slug: 'lagos',
      location: {
        latitude: 6.460649,
        longitude: 3.333309
      }
    }
  ]
} as MapProps
