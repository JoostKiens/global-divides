import { useLayoutEffect } from "react"

export const useSetCssProperty = (
  property: string,
  value: string,
  element: HTMLElement | undefined | null = document.documentElement,
) => {
  useLayoutEffect(() => {
    element?.style.setProperty(property, value)
  }, [element, property, value])
}
