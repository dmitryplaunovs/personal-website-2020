// current time in Berlin to display on the homepage
function localTimeFunction() {
	var today = new Date();
	// taking into account daylight saving time
	if (
		// every day from April until September (no changes needed)
		(today.getUTCMonth() >= 3 && today.getUTCMonth() <= 8) ||

		// different conditions for March
		(today.getUTCMonth() == 2 && (
			(today.getUTCDate() == 25 && today.getUTCDay() == 0) ||
			(today.getUTCDate() == 26 && today.getUTCDay() <= 1) ||
			(today.getUTCDate() == 27 && today.getUTCDay() <= 2) ||
			(today.getUTCDate() == 28 && today.getUTCDay() <= 3) ||
			(today.getUTCDate() == 29 && today.getUTCDay() <= 4) ||
			(today.getUTCDate() == 30 && today.getUTCDay() <= 5) ||
			(today.getUTCDate() == 31))
		) ||

		// different conditions for October
		(today.getUTCMonth() == 9 && (
			(today.getUTCDate() <= 24) ||
			(today.getUTCDate() == 25 && today.getUTCDay() >= 1) ||
			(today.getUTCDate() == 26 && today.getUTCDay() >= 2) ||
			(today.getUTCDate() == 27 && today.getUTCDay() >= 3) ||
			(today.getUTCDate() == 28 && today.getUTCDay() >= 4) ||
			(today.getUTCDate() == 29 && today.getUTCDay() >= 5) ||
			(today.getUTCDate() == 30 && today.getUTCDay() == 6))
		)
	) {
		// UTC+2 (daylight saving time)
		if (today.getUTCHours() >= 22) {my_hours = today.getUTCHours() - 22} else {my_hours = today.getUTCHours() + 2}
	} else {
		// UTC+1
		if (today.getUTCHours() >= 23) {my_hours = today.getUTCHours() - 23} else {my_hours = today.getUTCHours() + 1}
	}
	// adding leading zeros
	if (my_hours < 10) {hours = "0" + my_hours}	else {hours = my_hours}
	if (today.getMinutes() < 10) {minutes = "0" + today.getMinutes()}	else {minutes = today.getMinutes()}
	document.getElementById('time_hours').innerHTML = hours;
	document.getElementById('time_minutes').innerHTML = minutes;
}
setInterval(localTimeFunction, 10000); // updating time every 10 seconds
