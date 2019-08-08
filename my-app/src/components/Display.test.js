import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";

import Display from "./Display";

describe("<Display />", () => {
  it("should display the count of balls and strikes for the at-bat", () => {
    const playersData = [{ id: 1, name: "Balls" }, { id: 2, name: "Strikes" }];

    const comp = render(<Display players={playersData} />);

    const players = comp.getAllByTestId("player");
    expect(players).toHaveLength(playersData.length);
  });
});
