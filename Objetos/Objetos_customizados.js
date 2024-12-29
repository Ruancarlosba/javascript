function changeName(name) {
    this.name = name
    this.updateAt = new Date()
}

const task1 = {
    name: "task 1",
    createdAt: new Date(),
    updateAt: null,
    completed: false,
    changeName
}

const task2 = {
    name: "task 2",
    createdAt: new Date(),
    updateAt: null,
    completed: false
}

task1.name = "task 1 updated"
task1.updateAt = new Date()

task1.changeName("nome atualizado")

console.log(task1)