import { SEARCH_DATA } from '../actions';

const initialState = {
  planet: [],
  totalPopulation: 0
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_DATA:
      let sum = action.result.reduce((value, item)=>{
        if(!value){
          value = 0;
        }
        value += Number(item.population);
        return value;
      },0);
      return {
        ...state,
        planet: action.result,
        totalPopulation: sum
      }
  }
  return state;
}
