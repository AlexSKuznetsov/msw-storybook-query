import { createContext, useCallback, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { useData } from '../hooks/hook';

const initialState = {
  data: [],
  counter: 0,
};

export const DataContext = createContext();

export const ACTION_TYPES = {
  getData: '@data/GET_DATA',
  increment: '@counter/increment',
};

export const DataProvider = ({ children }) => {
  const { data, isLoading, error, isFetching, refetch } = useData();
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTION_TYPES.getData:
        return { ...state, data: data };
      case ACTION_TYPES.increment:
        return { ...state, counter: state.counter + 1 };
      default:
        return state;
    }
  }, initialState);

  const getData = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.getData,
    });
  }, [dispatch]);

  const increment = useCallback(() => {
    dispatch({
      type: ACTION_TYPES.increment,
    });
  }, [dispatch]);

  useEffect(() => {
    if (!isLoading && !isFetching && !error) {
      getData();
    }
  }, [isFetching, isLoading, error, data, getData]);

  const refetchData = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <DataContext.Provider
      value={{
        state,
        refetchData,
        increment,
        isFetching,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
