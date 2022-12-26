import React, { Suspense, lazy, FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerMeta } from '@/meta';
import { assignRouteArrayProps } from '@/utils';
import NotFound from '@/components/NotFound';
import FlexCenter from '@/components/FlexCenter';

interface ICustomRotuerProps {
}

const lazyImport = (containerName: string) => lazy(() => import(`@/containers/${containerName}`));

interface AssignRoute {
  Comp: any,
  propsArr: any | any[]
}

const assignRouter: AssignRoute[] = Object.keys(routerMeta).map((componentKey: string) => {
  const propsArr: any = assignRouteArrayProps(routerMeta[componentKey])
  return {
    Comp: lazyImport(componentKey),
    propsArr
  }
})

const CommonRouter: FunctionComponent<ICustomRotuerProps> = (props) => {
  return <Suspense fallback={<FlexCenter>Loading...</FlexCenter>}>
    <Routes>
      {assignRouter.map(({ Comp, propsArr }) => {
        if (Array.isArray(propsArr)) {
          return propsArr.map(props => {
            return <Route key={props.path} element={<Comp />} {...props} />
          })
        } else {
          return <Route key={propsArr.path} element={<Comp />} {...propsArr} />
        }
      })}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>;
};

export default CommonRouter;