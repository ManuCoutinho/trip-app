export type PlaceTemplateProps = {
  place: PlaceType
}

export type PlaceType = {
  slug: string
  name: string
  id: string
  description?: {
    html: string
  }
  gallery: Array<ImageType>
}

export type ImageType = {
  url: string
  height: number
  width: number
}
