const DateManager = {
	get getTodayDate() { return new Date(); },
	get getNow () { return Date.now(); },
	getLocalDateOf( date ) { return new Date(date); },
	isSameDay( date1, date2 ) { return this.getLocalDateOf(date1).toDateString() === this.getLocalDateOf(date2).toDateString(); },
	isToday( date ) { return this.getLocalDateOf(date).toDateString() === this.getTodayDate.toDateString(); },
	isFuture( date ) { return this.getLocalDateOf(date).getTime() > this.getTodayDate.getTime(); },
};

export default DateManager;
