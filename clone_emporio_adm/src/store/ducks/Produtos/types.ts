export enum ProductTypes {
    GET_PRODUTOS = '@GET_PRODUTOS',
    DELETE_PRODUTOS = '@DELETE_PRODUTOS'
}

export interface Produto {
    id: number ,
    title:string,
    price:string,
    description: string,
    image:string
}


