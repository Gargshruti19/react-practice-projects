import { useState } from "react";
import "./App.css";

const colorNames = [
	"Red",
	"Blue",
	"Green",
	"Yellow",
	"Orange",
	"Purple",
	"Pink",
	"Teal",
	"Cyan",
	"Magenta",
	"Brown",
	"Black",
	"Maroon",
	"Navy",
	"Olive",
	"Silver",
	"Gold",
	"Gray",
];

function App() {
	const [color, setColor] = useState("green");
	return (
		<>
			<div
				className="background"
				style={{
					backgroundColor: color,
				}}
			>
				{/* <h1
					style={{
						backgroundColor: color,
					}}
				>
					{color}
				</h1> */}
				<div className="btn-row">
					{colorNames.map((color) => (
						<button
							key={color}
							onClick={() => setColor(color)}
							style={{
								backgroundColor: color,
							}}
						>
							{color}
						</button>
					))}
				</div>
				<span>OR</span>
				<div className="color-palette">
					<label htmlFor="color">Choose a color :</label>
					<input
						id="color"
						type="color"
						value={color}
						onChange={(e) => setColor(e.target.value)}
					/>
					<p>{color}</p>
				</div>
			</div>
		</>
	);
}

export default App;
