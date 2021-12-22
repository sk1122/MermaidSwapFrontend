import { useState, useRef, useEffect } from "react";
import CardFront from "./CardFront";
import OptionBar from "./OptionBar"
  
export default function CardList() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const slider = useRef();

	const [progress, setProgress] = useState(0);
    
	function start(){
		let x = 0;
		let interval = setInterval(() => {
			x += 1
			
			setProgress(x)
			
			if(progress == 100){
				clearInterval(interval)
			}
		}, 1000);
    }

    useEffect(() => {
		start()
    }, [])

	let mapp = [1, 2, 3, 4, 5, 6]

	const handleOnNextClick = () => {
		slider.current.scrollLeft += 280
	};

    const handleOnPrevClick = () => {
		slider.current.scrollLeft -= 280
	};

	useEffect(() => {
		slider.current.scrollLeft += ((window.innerWidth / 2) - 150)
	}, [])

	return (
		<div>
			<OptionBar nextClick={handleOnNextClick} prevClick={handleOnPrevClick} />
			<div ref={slider} className="no-scrollbar flex gap-5 overflow-x-scroll">
				<CardFront />
				<CardFront />
				<CardFront />

				<CardFront progress={progress} />
				
				<CardFront />

				<CardFront />
				<CardFront />
				<div></div>
			</div>
			<div onClick={handleOnPrevClick}>Prev</div>
		</div>
	)
}