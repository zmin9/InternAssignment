class Data {
  constructor() {
    this._taskDataArr = JSON.parse(localStorage.getItem('tasks')) || [];
    this._selectedCategory = "전체";
  }
  get #taskDataArr() { return JSON.parse(JSON.stringify(this._taskDataArr)); }
  get selectedCategory() { return this._selectedCategory; }
  // set setSelectedCategory(category) { this._selectedCategory = category}
  
  // get categoryArr() {
  //   return this._taskDataArr.map((task) => task.category)
  //     .reduce((result, category) => {
  //       if (result.includes(category) || category === '') return result;
  //       else return [...result, category];
  //     }, []);
  // }
  
  get filteredTaskArr() {
    return this._selectedCategory === "전체" ? this.#taskDataArr
      : this.#taskDataArr.filter((task) => task.category === this.selectedCategory);
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
    //return this.#taskDataArr;
  }
  // deleteTask(taskId){
  //   taskDataArr.splice(findIndexOf(taskId), 1);
  //   this.#save();
  // }
  // modifyTask(task) {
  //   const pre = taskDataArr[findIndexOf(taskId)];
  //   taskDataArr[findIndexOf(taskId)] = {
  //     id: taskId * 1,
  //     title: task.title || pre.title,
  //     category: task.category || pre.category,
  //     isDone: pre.isDone
  //   }
  //   this.#save();
  // }
  // function changeCheckedState(taskId){
  //   const pre = taskDataArr[findIndexOf(taskId)];
  //   taskDataArr[findIndexOf(taskId)] = {
  //     ...pre,
  //     isDone: !pre.isDone
  //   };
  //   this.#save();
  // }
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
  //
  // function findIndexOf(taskId){
  //   for(let i = 0; i < taskDataArr.length; i++)
  //     if(taskDataArr[i].id === taskId * 1) {
  //       return i;
  //     }
  //   throw new Error('잘못된 task id 입니다.');
  // }
  // clear() {
  //   localStorage.setItem('tasks',"[]");
  // }
}

export default Data;