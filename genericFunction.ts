

// const createArrayWithString=(value:string)=>[value];

// const createArrayWithNumber=(value:number)=>[value];


// const createArrayWithUserObj=(value:{id:number,name:string})=>{
//     return [value]
// }

const genericArrFunc=<T>(value:T)=>{
    return [value]
}


const arrString=genericArrFunc('imran')
console.log(arrString)
const arrNumber=genericArrFunc(2222)
console.log(arrNumber)
const arrObj=genericArrFunc({id:121,name:'imran'})
console.log(arrObj)