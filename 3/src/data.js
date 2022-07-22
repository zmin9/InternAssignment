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
  get doingTaskArr() { return this.#filteredTaskArr.filter((task)=>!task.isDone); }
  get doneTaskArr() { return this.#filteredTaskArr.filter((task)=>task.isDone); }
  
  get #filteredTaskArr() {
    return this._selectedCategory === "전체" ?
      this.#taskDataArr :
      this.#taskDataArr.filter((task) => task.category === this.selectedCategory);
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
  // function modifyTask(taskId, title, category) {
  //   const pre = taskDataArr[findIndexOf(taskId)];
  //   taskDataArr[findIndexOf(taskId)] = {
  //     id: taskId * 1,
  //     title: title || pre.title,
  //     category: category || pre.category,
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
  toggleChecking() {
  
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