import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const useFetchByRegion = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const region = searchParams.get('query');
    if (!region) {
      return;
    }
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchByRegion(region);
        setCountries(response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);
  const onHendleSubmit = value => {
    setSearchParams({ query: value });
    setQuery(searchParams.get('query'));
  };

  return {
    countries,
    isLoading,
    isError,
    onHendleSubmit,
  };
};
