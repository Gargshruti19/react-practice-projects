import { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Profile = () => {
	const { user } = useContext(UserContext);
	if (!user) return <div>please login</div>;
	return (
		<div className="flex flex-col justify-start items-center gap-4 h-[90vh] bg-black/80 pt-40 text-white text-7xl">
			USERNAME is :
			<br />
			<span className="text-9xl"> {user.username}</span>
		</div>
	);
};

export default Profile;
