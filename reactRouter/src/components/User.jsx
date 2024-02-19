import { useParams } from "react-router-dom";

const User = () => {
	const {id }= useParams();

	return (
		<div className="h-[70vh] flex justify-center items-center text-5xl text-white bg-pink-500">
			User id: {id}
		</div>
	);
};

export default User;
