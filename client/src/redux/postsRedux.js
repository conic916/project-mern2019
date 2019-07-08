// subreducery
/* SELECTORS */
export const getPosts = ({ posts }) => posts; // zwracanie tablicy postow 
/* ACTIONS */

// nazwy akcji maja byc unikalne w calej app.
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* INITIAL STATE */
// stan = tablica => posty ( obiekty )
const initialState = [];

/* REDUCER */

// przyjmuje tablice action.payload, i jej zawartosc zwraca jako nowy stan
//pobieranie danych z serwera i zapisywanie ich do magazynu app
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
      case LOAD_POSTS:
        return [ ...action.payload ];
      default:
        return statePart;
    }
  };
