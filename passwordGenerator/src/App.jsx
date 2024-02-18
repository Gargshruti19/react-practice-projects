/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
	const passwordRef = useRef(null);
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	//Password generator function
	const passwordGenerator = useCallback(() => {
		let pass = "";
		let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numberAllowed) string += "0123456789";
		if (charAllowed) string += "!@#$%^&*-_+=[]{}~`";

		//Loop over the length of the password and append it in pass variable
		for (let i = 1; i <= length; i++) {
			let char = Math.floor(Math.random() * string.length + 1);
			pass += string.charAt(char);
		}
		// set value of password that we get from the for loop
		setPassword(pass);
		//everytime these dependency change, call passwordGenerator function
	}, [length, numberAllowed, charAllowed, setPassword]);

	//function to add copied password in clipboard
	const copyPasswordToClipBoard = useCallback(() => {
		passwordRef.current?.select(); // show selected text
		passwordRef.current?.setSelectionRange(0, passwordRef.current.value.length); //set range of selection in this case 0 to the length of pssword
		window.navigator.clipboard.writeText(password);
	}, [password]);
	// call this password generator function whenever these dependencies changes
	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charAllowed, passwordGenerator]);
	return (
		<>
			<div className="w-screen h-screen object-contain relative">
				{/*set this image as background */}
				<img
					className="w-full h-full grayscale blur-[2px]"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYpdLHwiPqcz4tUrMQqqrn2GDczDnVHCRFg&usqp=CAU"
					alt="background"
				/>
				<div
					className="w-1/2 min-w-min bg-black absolute top-1/4 left-1/2  -translate-x-1/2 shadow-xl shadow-zinc-700 p-10 flex flex-col gap-10 rounded-tl-xl rounded-tr-3xl rounded-br-xl rounded-bl-3xl bg-opacity-90"
					style={{
						boxShadow: "0 8px 10px rgba(0, 0, 0, 0.9)",
						WebkitBoxShadow: "0 8px 10px rgba(0, 0, 0, 0.9)",
					}}
				>
					<h1 className="text-white text-4xl text-center">
						Password Generator
					</h1>
					<div className="flex justify-center w-4/5 mx-auto">
						<input
							ref={passwordRef}
							type="text"
							placeholder="Password"
							value={password}
							className="appearance-none
              bg-gray-700 bg-opacity-50
              text-white
              px-4 py-2
              rounded-l-md
              font-medium text-lg
              w-full
              cursor-not-allowed
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
							readOnly
						/>
						<button
							onClick={copyPasswordToClipBoard}
							className="text-white bg-blue-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-700 focus:bg-blue-700 w-1/5 text-xl py-2 px-4 transition duration-500 ease-in-out transform hover:scale-105"
						>
							Copy
						</button>
					</div>
					<div className="flex gap-9">
						<input
							type="range"
							className="cursor-pointer"
							min={8}
							max={50}
							value={length}
							onChange={(e) => setLength(e.target.value)}
						/>
						<label className="text-white text-2xl">Length : {length}</label>
						<input
							id="numberInput"
							type="checkbox"
							defaultChecked={numberAllowed}
							className="w-5 cursor-pointer"
							onChange={() => setNumberAllowed((prev) => !prev)}
						/>
						<label className="text-white text-2xl" htmlFor="numberInput">
							Numbers
						</label>
						<input
							id="characterInput"
							type="checkbox"
							defaultChecked={charAllowed}
							className="w-5 cursor-pointer"
							onChange={() => setCharAllowed((prev) => !prev)}
						/>
						<label className="text-white text-2xl" htmlFor="characterInput">
							Characters
						</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
