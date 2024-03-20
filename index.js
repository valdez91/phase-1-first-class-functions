
const receivesAFunction =(callback) => {
    callback()
}
const returnsANamedFunction =() => {
    return function named (){
        console.log('My name is Vic')
    }
}
const returnsAnAnonymousFunction= () => {
    return () => {
        console.log('No second Name.')
    }
}