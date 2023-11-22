export interface ILayer {
  texture: string
  loaderImage: string
  initialRotation: [number, number, number]
}

export interface IChapter {
  id: string
  Content: () => JSX.Element
  layer?: ILayer
  title?: string
}
