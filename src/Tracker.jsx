import React, { useState, useEffect } from "react";
import Table from "./Table";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Tracker = () => {
	const [coviddata, setcoviddata] = useState([]);
	useEffect(() => {
		async function getInfo() {
			const res = await axios.get("https://api.covid19api.com/summary");
			console.log(res.data.Countries);
			setcoviddata(res.data.Countries);
		}
		getInfo();
	});
	return (
		<>
			<div>listing</div>
			<table className="table">
				<thead className="">
					<tr>
						<th>#</th>
						<th>Country</th>
						<th>Date</th>
						<th>Total Case</th>
						<th>New Case</th>
						<th>Toatl Death</th>
						<th>New Death</th>
						<th>Toatl Recoverd</th>
						<th>New Recoverd</th>
					</tr>
				</thead>
				{coviddata.map((val, ind) => {
					return (
						<Table
							key={ind}
							sn={ind}
							date={val.Date}
							country={val.Country}
							totalcase={val.TotalConfirmed}
							newcase={val.TotalConfirmed}
							totaldeath={val.TotalDeaths}
							newdaeth={val.NewDeaths}
							totalrecovered={val.TotalRecovered}
							newrecoverd={val.NewRecovered}
						/>
					);
				})}
			</table>
		</>
	);
};
export default Tracker;
