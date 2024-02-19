import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const handleLogin = (e) => {
		e.preventDefault();
		navigate("/login");
	};
	return (
		<div className="flex flex-col justify-start items-center gap-10 h-[90vh] bg-black/80 pt-40">
			<h1 className="text-9xl text-white">This is HOME Page</h1>

			<button
				className="bg-black text-white px-6 py-3 rounded-xl hover:bg-black/80 border-0 active:outline-0 text-lg w-1/4"
				type="submit"
				onClick={handleLogin}
			>
				Log In
			</button>
		</div>
	);
};

export default Home;
