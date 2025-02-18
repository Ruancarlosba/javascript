const obj = {
    prop1: "prop 1",
    prop2: "prop 2"
}

const objFreeze = {...obj}
const objSeal = {...obj}
const objPrevent = {...obj}

Object.freeze(objFreeze) // nao pode criar, nem atualizar e nem remover propriedades
Object.seal(objSeal) // nao poder criar,pode atualizar , mas naõ pode remover props