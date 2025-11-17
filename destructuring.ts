
// ! object destructuring
const user ={
    id:1,
    name:{
        firstName:'imran',
        lastName:'hosen'
    },

    hobby:'gaming'
}


const {hobby:khela, name:{lastName:myLastName}}=user

console.log(myLastName)


// ? array destructuranig 


const friends=['rahim','sofiq','mahbu']


const [a,b,c]=friends

console.log(a,b,c)