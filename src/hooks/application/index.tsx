import React, {
  createContext,
  useContext,
  useReducer,
  useCallback,
} from 'react';

const SET_ROOMS = 'SET_ROOMS';
const SET_SORTED_ROOMS = 'SET_SORTED_ROOMS';
const SET_FEATURED_ROOMS = 'SET_FEATURED_ROOMS';
const SET_LOADING = 'SET_LOADING';

interface IRoom {
  id: number,
  price: number,
}

interface IRoomContext {
  rooms: IRoom[],
  sortedRooms: IRoom[],
  featuredRooms: IRoom[],
  loading: Boolean
}

const ApplicationContext = createContext<IRoomContext>({ rooms: [], sortedRooms: [], featuredRooms: [], loading: true });

const useApplication = () => {
  const [application, setApplication] = useContext<IRoomContext>(ApplicationContext);

  const setSearchTerm = useCallback(
    term => setApplication({ type: SET_SEARCH_TERM, value: term }),
    [setApplication]
  );

  const setResult = useCallback(
    result => setApplication({ type: SET_RESULT, value: result }),
    [setApplication]
  );

  return { ...application, setSearchTerm, setResult };
};

const ApplicationProvider = ({ application = {}, children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case SET_ROOMS:
        return { ...state, rooms: action.value };
      case SET_SORTED_ROOMS:
        return { ...state, sortedRooms: action.value };
      case SET_FEATURED_ROOMS:
        return { ...state, featuredRooms: action.value };
      case SET_LOADING:
        return { ...state, loading: action.value };
      default:
        return state;
    }
  };

  return (
    <ApplicationContext.Provider value={useReducer(reducer, application)}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { useApplication, ApplicationProvider };