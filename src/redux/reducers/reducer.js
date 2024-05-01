const INIT_STATE = {
    carts: []
};


export const cartreducer = (state = INIT_STATE, action) => {
    let IteamIndex, data ,IteamIndex_dec;
    switch (action.type) {
        case "ADD_CART":

        IteamIndex = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
        

        if(IteamIndex >= 0){
            state.carts[IteamIndex].qnty +=1
            return {
                ...state,
                carts:[...state.carts]
            }
        }else{
            const temp = {...action.payload,qnty:1}
             return {
                ...state,
                carts: [...state.carts, temp]
            }
        }
      
           

        case "RMV_CART":
             data = state.carts.filter((el)=>el.id !== action.payload); 
            // console.log(data);

            return {
                ...state,
                carts:data
            }
           
        case "RMV_ONE":
             IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            if(state.carts[IteamIndex_dec].qnty >= 1){
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }
              break;
        default:
            return state
    }
}