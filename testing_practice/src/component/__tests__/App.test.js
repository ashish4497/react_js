import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

it("show the comment box", () => {
	// write the test Logics
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	expect(div.innerHTML).toContain("This is a commentBox component");
	// console.log(div.innerHTML, "show in the appTest component");

	ReactDOM.unmountComponentAtNode(div);
});
