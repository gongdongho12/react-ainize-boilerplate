import React, { Suspense, lazy, FunctionComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        {assignRouter.map(({ component, props }) => <Route key={props.path} component={component} {...props} />)}
      </Switch>
    </Suspense>;
};

export default CommonRouter;
