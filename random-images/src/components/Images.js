import React, { Component } from "react";
const img1 = require("../images/img1.jpg");
const img2 = require("../images/img2.jpg");
const img3 = require("../images/img3.jpg");
const img4 = require("../images/img4.jpg");
const img5 = require("../images/img5.jpg");

console.log(img1, "for checking moto");
class Images extends Component {
	constructor() {
		super();
		this.state = {
			index: 0,
			img: [img1, img2, img3, img4, img5]
		};
	}

	//for Next image
	nextImage = (e) => {
		e.preventDefault();
		if (this.state.index + 1 === this.state.img.length) {
			this.setState({
				index: 0
			});
		} else {
			this.setState({
				index: this.state.index + 1
			});
		}
	};

	//for Previous image
	previousImage = (e) => {
		e.preventDefault();
		if (this.state.index - 1 === -1) {
			this.setState({
				index: this.state.img.length - 1
			});
		} else {
			this.setState({
				index: this.state.index - 1
			});
		}
	};

	render() {
		return (
			<div>
				<button className='previous-image' onClick={this.previousImage}>
					Prev
				</button>
				<img src={this.state.img[this.state.index]} alt='img' />
				<button className='next-image' onClick={this.nextImage}>
					Next
				</button>
			</div>
		);
	}
}

export default Images;
