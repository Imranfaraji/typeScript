type User={
    name:string;
    age:number
}

type Role={
    role:string
}

type UserWithRole= User & Role


const user1:UserWithRole={
    name:'imran',
    age:20,
    role:'admin'
}


//  type interface work only on object

interface IUser{
    namme:string,
    isadmin:boolean
}

const user2:IUser={
    namme:'imran',
    isadmin:true
}