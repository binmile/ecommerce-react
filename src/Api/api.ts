const Base_URL:string = "https://ecommercejs.onrender.com/";



export const getLimitedTimeOffer = async (params:Record<string,string>)=>{
    return await fetch(Base_URL+'limitedTimeOffer?'+ new URLSearchParams(params))
}

export const getProduct = async(params:Record<string,string>)=>{
    return await fetch(Base_URL+"products?"+ new URLSearchParams(params))
}

