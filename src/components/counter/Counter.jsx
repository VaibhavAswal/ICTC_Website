import { useEffect, useRef, useState } from "react";
import "./Counter.css";

const Counter = () => {
	const elem = useRef();
	const [loaded, setloaded] = useState(false);
	useEffect((loaded) => {
		function isInViewPort() {
			// Get the bounding client rectangle position in the viewport
			var bounding = elem.current.getBoundingClientRect();

			// Checking part. Here the code checks if it's *fully* visible
			// Edit this part if you just want a partial visibility
			if (
				bounding.top >= 0 &&
				bounding.bottom <=
					(window.innerHeight || document.documentElement.clientHeight)
			) {
				return true;
			} else {
				return false;
			}
		}

		window.addEventListener(
			"scroll",
			function (event) {
				if (!loaded && isInViewPort()) {
					setloaded(true);
				}
			},
			false
		);
	}, []);
	useEffect(() => {
		function constant(duration, range, current) {
			return duration / range;
		}
		function animateValue(id, start, duration, easing) {
			var end = parseInt(document.getElementById(id).textContent, 10);
			var range = end - start;
			var current = start;
			var increment = end > start ? 1 : -1;
			var obj = document.getElementById(id);

			var step = function () {
				current += increment;
				obj.innerHTML = current;

				if (current !== end) {
					setTimeout(step, easing(duration, range, current));
				}
			};

			setTimeout(step, easing(duration, range, start));
		}
		animateValue("projects", 0, 2000, constant);
		animateValue("lines", 0, 3000, constant);
		animateValue("events", 0, 1500, constant);
		animateValue("members", 0, 3000, constant);
	}, [loaded]);

	return (
		<div className="Counter" ref={elem}>
			<div className="counterChild">
				<h1>
					<span id="projects">19</span>
					<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Projects Done</p>
			</div>
			<div className="counterChild">
				<h1>
					<span id="lines">500</span>K
					<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Lines of Code</p>
			</div>
			<div className="counterChild">
				<h1>
					<span id="events">9</span>
					<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Events Won</p>
			</div>
			<div className="counterChild">
				<h1>
					<span id="members">200</span>
					<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Active Members</p>
			</div>
		</div>
	);
};

export default Counter;
