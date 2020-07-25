import React, { FunctionComponent, CSSProperties } from "react";
import DefaultLayout from "components/DefaultLayout";

interface ICardViewProps {}

interface Props {
  style?: CSSProperties
}

const Home: FunctionComponent<ICardViewProps> = (props) => {

  return (
    <DefaultLayout>
      Home
    </DefaultLayout>
  );
};


export default Home;
