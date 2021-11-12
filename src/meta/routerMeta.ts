import { RouteProps } from "react-router-dom"

export type RouterMetaType = { [key: string] : (string | Omit<RouteProps, 'component'>) } 

const routerMeta: RouterMetaType = {
  Home: { path: '/' },
  About: '/about',
}

export default routerMeta