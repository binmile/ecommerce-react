export type CardType = {
       id:string,
       img? : string,
       title?:string,
       brand?:string,
       description?:string,
       ratings?:number,
       cost?:number,
       discount?:number,
       count?:number,
}

export type DealOfTheDay = {
       product?:CardType
       offerEndTime: string
}