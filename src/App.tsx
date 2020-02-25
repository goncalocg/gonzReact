import * as React from "react";
import "./styles.css";
import CustomHeader from "./presentation/views/header/customHeader";
import CustomFooter from "./presentation/views/footer/customFooter";
import Content from "./presentation/views/content/content";

export default function App() {
  return (
    <div className="App">
      <CustomHeader />
      <Content />
      <CustomFooter />
    </div>
  );
}
