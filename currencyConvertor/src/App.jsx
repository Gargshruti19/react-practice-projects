import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convertedAmount, setConvertedAmount] = useState(0);
	const currencyInfo = useCurrencyInfo(from);

	const options = Object.keys(currencyInfo);

	const swap = () => {
		setFrom(to);
		setTo(from);
		setAmount(convertedAmount);
		setConvertedAmount(amount);
	};

	const convert = () => {
		setConvertedAmount(amount * currencyInfo[to]);
	};

	return (
		<div className="w-full h-screen flex flex-wrap justify-center items-center object-cover bg-no-repeat bg-cover">
			<div
				className="w-full h-full"
				style={{
					position: "absolute",
					backgroundImage: `url("https://images.pexels.com/photos/395044/pexels-photo-395044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
					backgroundSize: "cover",
					filter: "grayscale(100%)",
					zIndex: "-1",
				}}
			></div>
			<div className="w-full">
				<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg py-10 px-16 backdrop-blur-sm bg-white/30 relative z-10 ">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							convert();
						}}
					>
						<div className="w-full mb-1">
							<InputBox
								label="From"
								amount={amount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setFrom(currency)}
								selectCurrency={from}
								onAmountChange={(amount) => setAmount(amount)}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-black/80 text-white px-2 py-0.5"
								onClick={swap}
							>
								SWAP
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<InputBox
								label="To"
								amount={convertedAmount}
								currencyOptions={options}
								onCurrencyChange={(currency) => setTo(currency)}
								selectCurrency={to}
								amountDisable
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-black/80 text-white px-4 py-3 rounded-lg"
						>
							Convert {from.toUpperCase()} to {to.toUpperCase()}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
