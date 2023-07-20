import { Square } from "../squares";

type TProps={
value:any,
}

export const Board:React.FC<TProps>=({value})=>{

   const state = {
        blocks: Array(9).fill(undefined),
        winner: undefined,
        nextTurn: 'X'
      };

  

    return(
        
        <div className="wrapper">
       
      </div>
    )
}