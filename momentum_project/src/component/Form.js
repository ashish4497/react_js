import React from 'react';

const Form = () => {
		return( 
			<div className="from_section">
				<input type ="text" placeholder="Name" className="name-input style-input "/>
				<input type ="text" placeholder="Email" className="email-input style-input"/>
				 <select id="country" name="select">
      <option value="select">select</option>
    </select>
			</div>
		)
}
export default Form;