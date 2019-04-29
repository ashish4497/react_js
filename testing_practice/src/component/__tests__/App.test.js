import React from "react";
// import ReactDOM from "react-dom";
import { configure } from "enzyme";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import App from "../App";
import CommentBox from "../Commentbox";
import CommentList from "../Commentlist";

it("show the comment box", () => {
	// write the test Logics
	// const div = document.createElement("div");
	// ReactDOM.render(<App />, div);
	// expect(div.innerHTML).toContain("This is a commentBox component");
	// // console.log(div.innerHTML, "show in the appTest component");
	// ReactDOM.unmountComponentAtNode(div);
	const wrapped = shallow(<App />);
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("show the list component", () => {
	const wrapped = shallow(<App />);
	expect(wrapped.find(CommentList).length).toEqual(1);
});
