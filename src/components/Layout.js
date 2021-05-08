import { Fragment } from "react";
import Navbar from "./Navbar";
const Layout = (props) => {
  //const children = props.children;
  return (
    <Fragment>
      <Navbar />
      {props.children}
    </Fragment>
  );
};

export default Layout;
