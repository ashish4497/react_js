import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import CommentBox from "../Commentbox";
import { shallow } from "enzyme";

it("comment box test ", () => {
	const wrapped = shallow(<CommentBox />);
	expect(wrapped.find("textarea").length).toEqual(1);
});

it("comment box test ", () => {
	const wrapped = shallow(<CommentBox />);
	expect(wrapped.find("button").length).toEqual(1);
});
