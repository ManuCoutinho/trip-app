import { PlaceTemplateProps } from 'templates/Place/types'

export default {
  place: {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    id: 'rio-21',
    description: {
      html: 'some description about the city here',
      text: 'some text content like a placeholder here'
    },
    gallery: [
      {
        url: '/pic-rj.jpg',
        height: 100,
        width: 200
      }
    ]
  }
} as PlaceTemplateProps

export const placeWithOutHtml = {
  place: {
    slug: 'rio-de-janeiro',
    name: 'Rio de Janeiro',
    id: 'rio-21',
    description: {
      html: '',
      text: 'some text content like a placeholder here'
    },
    gallery: [
      {
        url: '/pic-rj.jpg',
        height: 100,
        width: 200
      }
    ]
  }
}
