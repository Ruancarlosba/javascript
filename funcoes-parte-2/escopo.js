const str = "global string"

function teste(str) {
    console.log(this)
    console.log(str)
}


const teste2 = () => {
    console.log("arrow function")
    console.log(this)
}
//teste("parametro")

const Obj = {
    foo: "bar",
    teste: teste,
    teste2: teste2
}
Obj.teste()
Obj.teste2()