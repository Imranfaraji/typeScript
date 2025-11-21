interface Developer<T> {
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        relesedYear:string;
    };
    smartWatch:T
}

interface RichWatch{
heartRate:string;
    callFeature:boolean,
    calculator:boolean
}


const riceDeveloper:Developer<RichWatch> ={
     name:'mr.rich' ,
     salary:20,
     device:{
        brand:'hp',
        model:'x31',
        relesedYear:'20'
     } ,
     smartWatch:{
        heartRate:'2000',
        calculator:true,
        callFeature:true
     }
}
const poorDeveloper:Developer<{
    heartRate:string;
    stopWatch:boolean
}> ={
     name:'mr.poor' ,
     salary:20,
     device:{
        brand:'lenovo',
        model:'a21',
        relesedYear:'2010'
     } ,
     smartWatch:{
        heartRate:'2000',
        stopWatch:true
     }
}