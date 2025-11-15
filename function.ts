// ** function type

function addNormal (a:number, b:number) :number{
    return a+b
}

addNormal(2,3)

const arowFn=(x :number,y:number) : number=>{
    return x+y
}

arowFn(2,3)



const poorUser={
    name:'imran',
    belance:0,
    addBalence(value:number) : number {
         const newVelance : number= this.belance +value;
         return newVelance
    }
}


const arr :number[]=[1,2,3,4]

const newArray :number[]=arr.map((elem:number):number=>{
    return elem**2
})

console.log(newArray)