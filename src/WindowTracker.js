import React from "react";

export default function WindowTracker() {
	const [windowData, setWindowData] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	React.useEffect(() => {
		window.addEventListener("resize", function () {
			setWindowData((prevWindow) => ({
				width: window.innerWidth,
				height: window.innerHeight,
			}));
		});
	}, []);

	return (
		<div>
			<h1>Window width: {windowData.width}</h1>
			<h1>Window height: {windowData.height}</h1>
		</div>
	);
}
