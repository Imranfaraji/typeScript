type Product={
    id:number;
    name:string;
    price:string;
    stock:boolean;
    color?:string
}


// pick

type ProductSummary= Pick<Product,'id'|'name'|'price'>

// omit
type ProductSctokOut=Omit<Product,'color'|'stock'>


// required
type ProductWithColor= Required<Product>

const allProduct:ProductWithColor={
    id:222,
    name:'sdjfk',
    price:'22',
    stock:true,
    color:'blue'
}


// partial
type OptionalProduct=Partial<Product>

type ProductReadOnly=Readonly<Product>

    