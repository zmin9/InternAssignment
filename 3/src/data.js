class Data {
  constructor() {
    this._taskDataArr = JSON.parse(localStorage.getItem('tasks')) || [];
  }
  get #taskDataArr() { return JSON.parse(JSON.stringify(this._taskDataArr)); }
  get dateHavingScheduleStringArr() {
    return this.#getValueArrWithoutDuplicate('date');
  }
  get allCategoryStrArr() {
    return this.#getValueArrWithoutDuplicate(
      'category',
      this.#taskDataArr
    );
  }
  categoryStrAtSelectedDateArr(selectedDate) {
    return this.#getValueArrWithoutDuplicate(
      'category',
      this.selectedDateTaskArr(selectedDate)
    );
  }
  filteredByCategoryAndDateTaskArr(selectedDate, selectedCategory) {
    return selectedCategory === "전체" ?
      this.selectedDateTaskArr(selectedDate)
      :
      this.selectedDateTaskArr(selectedDate).filter((task) =>
        task.category === selectedCategory
      );
  }
  selectedDateTaskArr(selectedDate) {
    return this.#taskDataArr.filter((task) =>
      selectedDate.toDateString() === task.date
    );
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
  
  #getValueArrWithoutDuplicate(value, arr = this.#taskDataArr){
    return arr.map((task) => task[value])
      .reduce((result, value) => {
        if (result.includes(value)) return result;
        else return [...result, value];
      }, []);
  }
}

export default Data;