const obj1 = {
    foo: "bar",
    internalprop:{}
}
Object.freeze(obj1)
obj1.foo = "alterado"
console.log(obj1)

obj1.internalprop.foo = "bar 2"
console.log(obj1)

function deepFreeze(obj){
    const propNmes = Object.getOwnPropertyNames(obj)

    propNmes.forEach(name => {
        let prop = obj[name]

        if(typeof prop === "object" && prop !== null) {
            deepFreeze(prop)
        }
    })
    return Object.freeze(obj)
}

const obj2 = {
    foo: "bar",
    internalprop: {
        Array: [1,2,3],
        internaObject: {teste: "teste"}
    }
}
deepFreeze(obj2)
obj2.foo = "alterado"
//obj2.internalprop.Array.push("alterado")
obj2.internalprop.internaObject.teste = "alterado"
console.log(obj2)
