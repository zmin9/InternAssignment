class Data {
  constructor() {
    this._taskDataArr = JSON.parse(localStorage.getItem('tasks')) || [];
    this._selectedCategory = "전체";
  }
  get #taskDataArr() { return JSON.parse(JSON.stringify(this._taskDataArr)); }
  get selectedCategory() { return this._selectedCategory; }
  get filteredTaskArr() {
    return this._selectedCategory === "전체" ? this.#taskDataArr
      : this.#taskDataArr.filter((task) => task.category === this.selectedCategory);
  }
  get dateHavingScheduleStringArr() {
    return this.#taskDataArr.map((task) => task.date)
      .reduce((result, date) => {
        if (result.includes(date)) return result;
        else return [...result, date];
      }, []);
  }
  
  selectedDateTaskArr(selectedDay) {
    return this.#taskDataArr.filter((task) => selectedDay.toDateString() === task.date);
  }
  addTask(title, category){
    this._taskDataArr.push({
      'id': Date.now(),
      'date': new Date().toDateString(),
      'title': title,
      'category': category,
      'isDone': false
    });
    this.#save();
  }
  toggleChecking(task) {
    const taskIdx = this.#taskDataArr.map((task)=> task.id).indexOf(task.id);
    this._taskDataArr[taskIdx] = {
      ...task,
      isDone: !task.isDone
    };
    this.#save();
  }
  #save(){
    localStorage.setItem('tasks', JSON.stringify(this._taskDataArr));
  }
  // clear() {
  //   localStorage.setItem('tasks',"[]");
  // }
}

export default Data;