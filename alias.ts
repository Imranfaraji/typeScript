
type User={
    id:number;
    name:{
        firstName:string;
        lastName:string
    },
    gender:'male'|'female'
}



const user :User={
 id:1,
 name:{
    firstName:'imran',
    lastName:'hosen'
 },
 gender:'male'
}



type AddFunction=(a:number,b:number)=>number

const add:AddFunction =(a,b)=>{
    return a+b
}