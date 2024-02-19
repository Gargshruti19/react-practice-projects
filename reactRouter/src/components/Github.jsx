/* eslint-disable react-refresh/only-export-components */

import { useEffect, useState } from "react";

const Github = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://api.github.com/users/Gargshruti19")
			.then((response) => response.json())
			.then((data) => setData(data));
	});
	console.log(data);
	return (
		<div className="h-[70vh] flex justify-center items-center text-7xl text-white bg-yellow-500 gap-20">
			<h1>Followers Count : {data.followers}</h1>
			<div className="flex flex-col justify-center items-center gap-4">
				<img src={data.avatar_url} alt="avatar" />
				<span className="text-3xl text-black">{data?.login}</span>
			</div>
		</div>
	);
};

export default Github;
