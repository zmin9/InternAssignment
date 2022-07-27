export class DateManager {
	static #getTodayDate() { return new Date(); }
	static getLocalDate( date ) { return new Date(date); }
	static isSameDay( date1, date2 ) { return this.getLocalDate(date1).toDateString() === this.getLocalDate(date2).toDateString() }
	static isToday( date ) { return this.getLocalDate(date).toDateString() === this.#getTodayDate().toDateString(); }
	static isFuture( date ) { return this.getLocalDate(date).getTime() > this.#getTodayDate().getTime(); }
}