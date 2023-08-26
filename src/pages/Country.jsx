import { Section, Container, CountryInfo, Loader, GoBackBtn } from 'components';
import { useFetchCountry } from 'hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from 'routes';
export const Country = () => {
  const { country, isLoading, isError } = useFetchCountry();

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  // console.log(location);
  return (
    <Section>
      <Container>
        <GoBackBtn path={goBackLink}>Back to Countries list</GoBackBtn>
        {isLoading && <Loader />}
        {isError && <Navigate to={routes.HOME} replace />}
        {country && <CountryInfo country={country} />}
      </Container>
    </Section>
  );
};
