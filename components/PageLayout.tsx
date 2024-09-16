import { ReactNode } from 'react'
import NavigationBar from './NavigationBar'

export function PageLayout(props: { children: ReactNode }) {
  const { children } = props

  return (
    <>
      <NavigationBar />
      {children}
    </>
  )
}
