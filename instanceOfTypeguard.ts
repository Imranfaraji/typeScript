class Person{
    name:string
    constructor(name:string){
        this.name=name
    }

    takeSleep(numberOfhous:number){
    console.log(`${this.name} doinik ${numberOfhous} ghonta ghumay`)
  }
}


class Student extends Person{
  constructor(name:string){
    super(name)
  }

  doStudy(numberOfhous:number){
    console.log(`${this.name} doinik ${numberOfhous} ghonta pore`)
  }
  
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }

     takeClass(numberOfhous:number){
    console.log(`${this.name} doinik ${numberOfhous} ghonta class ney`)
  }
}


const getInfo=(user:Person)=>{
   if(user instanceof Student){
    user.doStudy(10)
   }else if(user instanceof Teacher){
    user.takeClass(8)
   }else{
    user.takeSleep(6)
   }
}

const student1=new Student('mr.x')

const teacher1=new Teacher('mr.y')

getInfo(student1)