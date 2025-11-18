


// genertics 

type GenrticArry<T>=Array<T>
const friend :GenrticArry<string>=['a','b','c']

const rollnumber:GenrticArry<number>=[1,2,3]

const isIligable:GenrticArry<boolean>=[true,false,true]


// ? tuple genertics

type CoOrdinator<x,y>=[x,y]

const coordinator:CoOrdinator<number,number>=[1,2]
const coordinator2:CoOrdinator<string,string>=['imran','hosen']


// ? object genertics

const user3:GenrticArry<{name:string,age:number}>=[{
    name:'imran',
    age:22
},
{
    name:'rohim',
    age:20
}]

