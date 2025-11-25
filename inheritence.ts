class parents{
    name:string;
    age:number;
    adress:string
    constructor(name:string, age:number,adress:string){
        this.name=name
        this.age=age
        this.adress=adress
    }

    getSleep(T:number){
        console.log(`${this.name} ${T} hours sleep`)
    }
}


class student extends parents{
    
}


class teacher extends parents{
    designation:string;

    constructor(name:string,age:number, adress:string, designation:string){
           super(name,age,adress)

           this.designation=designation
    }


    takeClass(c:number){
        console.log(`${this.name} take ${c} classes`)
    }

    

    


}

const student1=new student('mukhles',12,'nepal')

const teacher1=new teacher('mr teacher',45,'varoti','senour teacher')

teacher1.takeClass(10)


