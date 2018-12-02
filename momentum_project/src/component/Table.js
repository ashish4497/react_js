import React, {Component}from 'react'

class Table extends Component {
	render(){ 
	return(
			<div className="table-section">
			<div className="table-heading">
				     	<h1>Table</h1>
				     	</div>
			<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>Peter</td>
    <td>Griffin</td>
    <td>100</td>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>150</td>
  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>300</td>
  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>250</td>
  </tr>
   <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>250</td>
  </tr>
   <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>250</td>
  </tr>
   <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>250</td>
  </tr>
   <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>250</td>
  </tr>
</table>

			</div>
		)
}
}
export default Table;