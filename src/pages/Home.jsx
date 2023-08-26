import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks';

export const Home = () => {
  const { countries, isLoading, isError } = useFetchCountries();
  return (
    <Section>
      <Container>
        {isError && <Heading textAlign="center">Something wrong...</Heading>}
        {isLoading && <Loader></Loader>}
        {countries.length > 0 && (
          <CountryList countries={countries}></CountryList>
        )}
      </Container>
    </Section>
  );
};
