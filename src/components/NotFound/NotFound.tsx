import React, { FunctionComponent } from 'react';
import { Empty } from 'antd';
import DefaultLayout from '@/components/DefaultLayout';

interface INotFoundProps {
}

const NotFound: FunctionComponent<INotFoundProps> = (props) => {
  return <DefaultLayout>
    <Empty />
  </DefaultLayout>;
};

export default NotFound;