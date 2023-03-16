import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/ui/Header";

const MainLayout = (): JSX.Element => {

  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};

export default MainLayout;
