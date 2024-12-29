function Task(name){
  
    let _name = name

    this.createdAt = new Date()
    this.updateAt = null
    this.changeName = function(newName){
        if(newName) {
            _name = newName
            this.updateAt = new Date()
        }
    }
    this.getName =  function (){
        return _name
    }
}

/*------------------tarefa1----------------------*/ 
const task1 = new Task("minha tarefa")
task1.changeName("minha tarefa atualizada")


/*-------------------tarefa2----------------------- */
const task2  = new Task("minha segunda tarefa")

console.log(task1.getName())

task1.changeName()
console.log(task1.getName())
console.log(task1)

console.log(task2)