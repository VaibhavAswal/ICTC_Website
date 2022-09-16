import "./Counter.css";

const Counter = () => {
	return (
		<div className="Counter">
			<div className="counterChild">
				<h1>
					200<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Projects Done</p>
			</div>
			<div className="counterChild">
				<h1>
					100K<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Lines of Code</p>
			</div>
			<div className="counterChild">
				<h1>
					6<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Events Won</p>
			</div>
			<div className="counterChild">
				<h1>
					100<span style={{ color: "var(--color-1)" }}>+</span>
				</h1>
				<p>Active Members</p>
			</div>
		</div>
	);
};

export default Counter;
