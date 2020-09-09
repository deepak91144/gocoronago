import React, { useState, useEffect } from "react";
import Axios from "axios";
const AlliApi = () => {
	useEffect(() => {
		async function getdata() {
			const res = await Axios.get(
				"http://webhostsais.in/ZandoFi/public/api/getBest"
			);
			console.log(res);
		}
		getdata();
	});
	return <></>;
};
export default AlliApi;
