import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const useFetchCountry = () => {
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetchCountry(id);
        setCountry(response);
      } catch (error) {
        setIsError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);
  return {
    country,
    isLoading,
    isError,
  };
};
