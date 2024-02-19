import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-blue-500 text-white text-3xl p-4 h-[10vh]">
			<ul className="flex justify-center items-center gap-8">
				<li>
					<NavLink
						to={"/"}
						className={({ isActive }) =>
							isActive ? "text-black" : "text-white"
						}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/about"}
						className={({ isActive }) =>
							isActive ? "text-black" : "text-white"
						}
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/contact"}
						className={({ isActive }) =>
							isActive ? "text-black" : "text-white"
						}
					>
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink
						to={"/github"}
						className={({ isActive }) =>
							isActive ? "text-black" : "text-white"
						}
					>
						Github
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
