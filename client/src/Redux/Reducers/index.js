
import { GET_BREEDS, GET_BREED_DETAIL, SET_FILTERED, SET_LOADING, ORDER_ASC, ORDER_DESC, SET_BREEDS } from '../Actions/index';


const initialState = {
  loading: false,
  filteredBreeds: [],
  breedsLoaded: [],
  breedDetail: {}

};

function rootReducer(state = initialState, action) {
  if (action.type === GET_BREEDS) {
    return {
      ...state,
      breedsLoaded: action.payload,
      loading: false
    }
  }
  if (action.type === GET_BREED_DETAIL) {
    return {
      ...state,
      breedDetail: action.payload
    }
  }

  if (action.type === SET_FILTERED) {
    return {
      ...state,
      filteredBreeds: action.payload
    }
  }
  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: action.payload
    }
  }
  if (action.type === ORDER_ASC) {

    if (action.payload === 'name') {
      return {
        ...state,
        filteredBreeds: [...state.filteredBreeds].sort((a, b) => (a[action.payload].toLowerCase() > b[action.payload].toLowerCase()) ? 1 : -1),
        breedsLoaded: [...state.breedsLoaded].sort((a, b) => (a[action.payload].toLowerCase() > b[action.payload].toLowerCase()) ? 1 : -1)
      }

    } else {

      return {
        ...state,
        filteredBreeds: [...state.filteredBreeds].sort((a, b) => {

          const arrayA = a[action.payload].split(' - '); // ["2", "4"]   
          const arrayB = b[action.payload].split(' - '); // ["2", "4"]   

          const promA = (+arrayA[0] + (+arrayA[1]) ? +arrayA[1] : 0) / 2; // 5
          const promB = (+arrayB[0] + (+arrayB[1]) ? +arrayB[1] : 0) / 2; // 10

          return (promA > promB) ? 1 : -1

        }),
        breedsLoaded: [...state.breedsLoaded].sort((a, b) => {

          const arrayA = a[action.payload].split(' - '); // ["2", "4"]   
          const arrayB = b[action.payload].split(' - '); // ["2", "4"]   

          const promA = (+arrayA[0] + (+arrayA[1]) ? +arrayA[1] : 0) / 2; // 5
          const promB = (+arrayB[0] + (+arrayB[1]) ? +arrayB[1] : 0) / 2; // 10


          return (promA > promB) ? 1 : -1

        })
      }

    }
  }
  if (action.type === ORDER_DESC) {
    if (action.payload === 'name') {

      return {
        ...state,
        filteredBreeds: [...state.filteredBreeds].sort((a, b) => (a[action.payload].toLowerCase() < b[action.payload].toLowerCase()) ? 1 : -1),
        breedsLoaded: [...state.breedsLoaded].sort((a, b) => (a[action.payload].toLowerCase() < b[action.payload].toLowerCase()) ? 1 : -1)
      }
    } else {

      return {
        ...state,
        filteredBreeds: [...state.filteredBreeds].sort((a, b) => {

          const arrayA = a[action.payload].split(' - '); // ["2", "4"]   
          const arrayB = b[action.payload].split(' - '); // ["2", "4"]   

          const promA = (+arrayA[0] + (+arrayA[1]) ? +arrayA[1] : 0) / 2; // 5
          const promB = (+arrayB[0] + (+arrayB[1]) ? +arrayB[1] : 0) / 2; // 10


          return (promA > promB) ? -1 : 1

        }),
        breedsLoaded: [...state.breedsLoaded].sort((a, b) => {

          const arrayA = a[action.payload].split(' - '); // ["2", "4"]   
          const arrayB = b[action.payload].split(' - '); // ["2", "4"]   

          const promA = (+arrayA[0] + (+arrayA[1]) ? +arrayA[1] : 0) / 2; // 5
          const promB = (+arrayB[0] + (+arrayB[1]) ? +arrayB[1] : 0) / 2; // 10


          return (promA > promB) ? -1 : 1

        })
      }

    }
  }
  if (action.type === SET_BREEDS) {
    let filter = state.filteredBreeds;
    let breeds = state.breedsLoaded;

    if (action.payload === 'creada') {
      filter = filter.length > 0 ? filter.filter((b) => b.id >= 265) : [];
      breeds = breeds.length > 0 ? breeds.filter((b) => b.id >= 265) : [];

    } else if (action.payload === 'API') {
      filter = filter.length > 0 ? filter.filter((b) => b.id < 265) : [];
      breeds = breeds.length > 0 ? breeds.filter((b) => b.id < 265) : [];
    }
    return {
      ...state,
      breedsLoaded: breeds,
      filteredBreeds: filter
    }

  }
  return state;
}
export default rootReducer;