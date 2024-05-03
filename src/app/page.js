"use client"

// Clock.js
import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const secondsDegrees = (time.getSeconds() / 60) * 360 + 90;
	const minsDegrees =
		(time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6 + 90;
	const hourDegrees =
		(time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30 + 90;

	return (
		<div>
			<div className={styles.clock}>
				<div className={styles.clockFace}>
					<div
						className={`${styles.hand} ${styles.secondHand}`}
						style={{ transform: `rotate(${secondsDegrees}deg)` }}
					></div>
					<div
						className={`${styles.hand} ${styles.minHand}`}
						style={{ transform: `rotate(${minsDegrees}deg)` }}
					></div>
					<div
						className={`${styles.hand} ${styles.hourHand}`}
						style={{ transform: `rotate(${hourDegrees}deg)` }}
					></div>
				</div>
			</div>
		</div>
	);
}
