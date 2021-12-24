import { useTimer } from "react-timer-hook";

function MyTimer({ expiryTimestamp }) {
	const {
		seconds,
		minutes,
		hours,
		days,
		isRunning,
		start,
		pause,
		resume,
		restart,
	} = useTimer({
		expiryTimestamp,
		onExpire: () => {
			const time = new Date();
			time.setSeconds(time.getSeconds() + 5);
			restart(time, true)
		},
	});

	return (
		<div className="flex justify-center items-center gap-1 px-2 bg-blue-300 rounded-lg">
			<div className="text-xl">
				<span>{minutes <= 9 ? "0" : null}{minutes}</span>:<span>{seconds <= 9 ? "0" : null}{seconds}</span>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
				<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
			</svg>
		</div>
	);
}

export default function OptionBar({ nextClick, prevClick }) {
	const time = new Date();
	time.setSeconds(time.getSeconds() + 5);
	
	return (
		<div className="w-full h-1/4 grid place-items-center grid-cols-3 grid-rows-none">
			<div className="w-1/3 flex justify-center items-center">
				<div className="px-2 py-1 bg-blue-300 rounded-lg">
					AVAX: $121.3
				</div>
			</div>
			<div className="w-1/3 flex justify-center items-center gap-3">
				<div onClick={prevClick} className="px-2 rounded-lg" style={{ backgroundColor: "#ED4B99" }}>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
					</svg>
				</div>
				<div onClick={nextClick} className="px-2 bg-blue-300 rounded-lg">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
					</svg>
				</div>
			</div>
			<div className="w-1/3 flex justify-center items-center gap-5">
				<MyTimer expiryTimestamp={time} />
				<div className="px-2 py-1 bg-blue-300 rounded-lg">
					<svg viewBox="0 0 24 24" className="w-5 h-5" color="white" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM kYHDzn"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z"></path></svg>
				</div>
				<div className="px-2 py-1 bg-blue-300 rounded-lg">
					<svg viewBox="0 0 48 48" color="white" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM kYHDzn"><path d="M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z"></path></svg>
				</div>
			</div>
		</div>
	);
}
