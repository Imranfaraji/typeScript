// type grude 

// typeof   guard

type AlpaNumaric=string | number

const add=(number1:AlpaNumaric,number2:AlpaNumaric)=>{
    if(typeof number1 ==="number" && typeof number2==='number'){
        return number1+ number2
    }else {
        return number1.toString()+ number2.toString()
    }
}

const result=add(2,'2')

// console.log(result)


// in type guard

type NormalUser={
    name:string
}

type AdminUser={
    name:string;
    role:'Admin'
}


const getUser=(user:NormalUser|AdminUser)=>{
    if('role' in user){
        console.log(`${user.name} is ${user.role}`)
    }else{
        console.log(`${user.name}`)
    }
}

getUser({name:'imran', role:'Admin'})