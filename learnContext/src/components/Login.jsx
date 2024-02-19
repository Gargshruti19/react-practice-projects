import { useContext, useState } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const { setUser } = useContext(UserContext);
	const handleSubmit = (e) => {
		e.preventDefault();
		setUser({ username, password });
		navigate("/profile");
	};
	return (
		<div className="flex flex-col justify-start items-center gap-4 h-[90vh] bg-black/80 pt-40">
			<input
				className="bg-black text-white py-4 px-6 text-lg w-1/3 rounded-lg focus:bg-black/80 focus:outline-0 hover:bg-black/90"
				type="text "
				placeholder="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<input
				className="bg-black text-white py-4 px-6 text-lg w-1/3 rounded-lg focus:bg-black/80 focus:outline-0 hover:bg-black/90"
				type="password"
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>

			<button
				className="bg-white text-black px-6 py-3 mt-10 rounded-xl hover:bg-white/80 border-0 active:outline-0  text-lg w-1/4"
				type="submit"
				onClick={handleSubmit}
			>
				Submit
			</button>
		</div>
	);
};

export default Login;
