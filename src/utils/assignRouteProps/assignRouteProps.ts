const assignRouteProps = (props: any) => typeof props === 'object' ? props : ({ path: props })

export default assignRouteProps