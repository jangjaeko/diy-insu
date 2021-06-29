import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/view/Navigationbar";
export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
    </Suspense>
  );
}
