import axios from 'axios';
export const GET_BREEDS = 'GET_BREEDS';
export const GET_BREED_DETAIL = 'GET_BREED_DETAIL';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const SET_FILTERED = 'SET_FILTERED';
export const SET_LOADING = 'SET_LOADING';
export const ORDER_ASC = 'ORDER_ASC';
export const ORDER_DESC = 'ORDER_DESC';
export const SET_BREEDS = 'SET_BREEDS';

export function getBreeds() {
	return function (dispatch) {
		return axios.get('/dogs')
		.then((breeds) => {
			dispatch({
				type: 'GET_BREEDS',
				payload: breeds.data,
			});
		});
	};
}



export function getBreedDetail(id) {
  return function (dispatch) {
    return axios.get("/dogs/" + id)
      .then(response => response.data)
      .then(json => {
        dispatch({ type: GET_BREED_DETAIL, payload: json });
      });
  };
}

export function getTemperaments() {
	return function (dispatch) {
		return axios.get('/temperament')
		.then((temperament) => {
			dispatch({
				type: 'GET_TEMPERAMENT',
				payload: temperament.data,
			});
		});
	};
}

export function setFiltered(arr) {
  return { type: SET_FILTERED, payload:arr };
};

export function setLoading(payload) {
  return { type: SET_LOADING, payload };
};

export function ordenar(order, category) {

  return { type: order === 'asc' ? ORDER_ASC : ORDER_DESC, payload: category };
};

export function setBreeds(payload) {

  return {
    type: SET_BREEDS, payload
  }
  
}
