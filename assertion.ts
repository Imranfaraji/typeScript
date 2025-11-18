// let number:any;

// number='jsdhnj';
// (number as string).includes



// ? type assertion 

const kgTogram=(input: number|string):number|string|undefined=>{
  if(typeof input==='number'){
    return input * 1000
  }else {
    const [value]=input.split(' ')

    return Number(value)*1000
  }
}


const result1=kgTogram(2) as number

console.log(result1)

const result2=kgTogram('2 kg') as string
console.log(result2)


