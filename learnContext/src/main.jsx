import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import UserContextProvider from "./contexts/UserContextProvider.jsx";
import App from "./App.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={"/"} element={<App />}>
			<Route path="" element={<Home />} />
			<Route path="login" element={<Login />} />
			<Route path="profile" element={<Profile />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<UserContextProvider>
			<RouterProvider router={router} />
		</UserContextProvider>
	</React.StrictMode>
);
