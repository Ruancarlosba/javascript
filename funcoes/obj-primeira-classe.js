function fn(cb) {
    console.log("executar açao de callback")
    console.log(typeof cb)
    cb()
}
fn()
