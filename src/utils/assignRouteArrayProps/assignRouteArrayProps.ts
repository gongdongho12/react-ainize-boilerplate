const assignRouteProps = (props: any) => typeof props === 'object' ? props : ({ path: props })
const assignRouteArrayProps = (propsArr: any[] | any) => Array.isArray(propsArr) ? propsArr.map(prop => assignRouteProps(prop)) : assignRouteProps(propsArr)

export default assignRouteArrayProps