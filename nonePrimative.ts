// array,tuple, object


const bajarList : string[]= ['eggs','onion','tomato']

const numArray : number[] =[1,2,4,5]




const mixedArry : (string | number)[]=['imran',23,'akib', 22]




// *tuple

const couple: [string,string]=['husband','wife']

// const user : [string,number]=['imran',35]


// ?object type :


const user:{
    organigation:'programing hero'; //! constant man zar man change kora zaibo na
    firstName:string;
    middleName ?:string; //*optional chaining
    lastName:string;
    isMarried:boolean
}={
     
    organigation:'programing hero',
    firstName:'imran',
     isMarried:true,
     lastName:'hosen'
     
}

console.log(user)


