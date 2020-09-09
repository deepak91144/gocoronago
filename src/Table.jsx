import React from "react";
const Table = (props) => {
	return (
		<>
			<tr>
				<td>{props.sn}</td>
				<td>{props.country}</td>
				<td>{props.date}</td>
				<td>{props.totalcase}</td>
				<td>{props.newcase}</td>
				<td>{props.totaldeath}</td>
				<td>{props.newdaeth}</td>
				<td>{props.totalrecovered}</td>
				<td>{props.newrecoverd}</td>
			</tr>
		</>
	);
};
export default Table;
