import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/view/Navigationbar";
import ImageSlider from "./component/view/ImageSlider";
export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <ImageSlider />
    </Suspense>
  );
}
