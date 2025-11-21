const studentInfo=<T extends {
    id:number;name:string
}> (student:T)=>{
    const details={
        course:'next level ',
        ...student
    }

    return details
}



const student1={
    id:1,
    name:'imran',
    watch:true
    
}
const student2={
    id:2,
    name:'rabbi',
    watch:true
    
}
const student3={
    watch:false
}

const result=studentInfo(student1)
console.log(result)


