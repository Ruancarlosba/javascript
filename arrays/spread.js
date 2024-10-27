const arr = [1,2,3,4,5]

function sun() {
    console.log(arguments)
    console.log(arguments.length)
}

sun(...arr)