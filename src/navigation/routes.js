import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HomePage ,DetailPage,NotFoundPage} from "../containers/index";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const HomePage = lazy(() => import('../containers/home'));
const DetailPage = lazy(() => import('../containers/detail'));
const NotFoundPage = lazy(() => import('../containers/invalid'));

 

export default ({ childProps }) => (
  <Router>
    <Suspense fallback={
      <div style={{ marginTop: "20%" ,marginLeft: "40%"}}>
      <Loader color="#00BFFF" type="Plane" height={1000} width={1000} />
    </div>
    }>
  <Switch>
    <Route path={"/"} exact component={HomePage} props={childProps} />
    <Route path={"/Detail"} exact component={DetailPage} props={childProps} />
    <Route component={NotFoundPage} />
  </Switch>

  </Suspense>
  </Router>
);


