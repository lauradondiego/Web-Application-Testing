import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import * as rtl from "react-testing-library"

import App from "./App";

describe("<App />", () => {
  it("renders without crashing using ReactDOM", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without crashing", () => {
    render(<App />);
  });
  it("renders Hello World", () => {
    const app = render(<App />);

    app.getByText(/hello world/i);
    // /i lets you check for words without capilatizations
  });
});

// describe("<App />", () => {
//   it("renders without crashing using ReactDOM", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });

//   it("renders without crashing", () => {
//     render(<App />);
//   });

//   it("renders Hello World", () => {
//     const app = render(<App />);

//     app.getByText(/hello world/i);
//     // /i lets you check for words without capilatizations
//   });

//   it("should render list of people", () => {

//   })
// });
