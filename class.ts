// class Animal{
//     name:string;
//     specise:string;
//     sound:string;
//     constructor (name:string,specise:string,sound:string){
//         this.name=name;
//         this.specise=specise;
//         this.sound=sound
//     };


//     makeSound(){
//         console.log(`${this.name} is making sound:${this.sound}`)
//     }
// }




// class Animal{
    
//     constructor (public name:string,public specise:string,public sound:string){
       
//     };


//     makeSound(){
//         console.log(`${this.name} is making sound:${this.sound}`)
//     }
// }

// const dog=new Animal('kittu','dog','gew gew')
// console.log(dog)


// const cat = new Animal('cat bhai','cat','mew mew')
// console.log(cat)

// cat.makeSound()

// normal class
class car{
    name:string;
    model:string;
    releaseYear:string

    constructor(name:string,model:string,releaseYear:string){
        this.name=name;
        this.model=model;
        this.releaseYear=releaseYear
    }


    whoCanBuy(p:string){
        console.log(`${this.name} only for ${p}`)
    }


}


const bmw=new car('gost','x300','2025')

bmw.whoCanBuy('messi')


class suvCar{
    constructor(public carname:string, public carModel:string,public latest:boolean){

    }

    forGift(p:string){
        console.log(`${this.carname} gifted ${p}`)
    }
}


const rensrover=new suvCar('audi','Q8',true)

rensrover.forGift('ronaldo')