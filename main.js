let numN
do {
    numN = (+prompt('Enter number N'))
} while (!Number.isInteger(numN))


let numM
do {
    numM = (+prompt('Enter number M'))
} while (!Number.isInteger(numM))

let result = 0
const skip = confirm('should we skip net numbers?')
if (skip){
for (let i = numN; i <= numM; i++) {
    if (i%2 === 0) {
    result = result + i
    }
} 
}else {
    for (let i = numN; i <= numM; i++)
     result = result + i
}
    console.log('sum = ',result)


