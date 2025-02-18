console.log(testeArrow())

const testeArrow = (str) => {
    console.log("function testeArrow",str)  
    return "fn arrow"
}

const testeArrow2 = () => {
    console.log("testeArrow2 chamado")
    return {
        foo: "bar"
    }
}


const Arrow01 = testeArrow("parametro para arrow")
const Arrow02 = testeArrow2()

console.log(Arrow01)
console.log(Arrow02.foo)