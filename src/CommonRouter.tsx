import React, { Suspense, lazy, FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerMeta } from 'meta';
import { assignRouteProps } from 'utils';

interface ICustomRotuerProps {
}

const lazyImport = (containerName: string) => lazy(() => import(`containers/${containerName}`));

interface AssignRoute {
  component: any,
  props: any
}

const assignRouter: AssignRoute[] = Object.keys(routerMeta).map((componentKey: string) => {
  const props: any = assignRouteProps(routerMeta[componentKey])

  return {
    component: lazyImport(componentKey),
    props 
  }
})

const CommonRouter: FunctionComponent<ICustomRotuerProps> = (props) => {
  return <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {assignRouter.map(({ component: Comp, props }) => <Route key={props.path} element={<Comp />} {...props} />)}
      </Routes>
    </Suspense>;
};

export default CommonRouter;
