import { useState, useEffect } from 'react';
import { getCountries } from 'service/country-service';

export const useFetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return {
    countries,
    isLoading,
    isError,
  };
};
