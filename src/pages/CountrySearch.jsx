import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useFetchByRegion } from 'hooks/useFetchByRegion';

export const CountrySearch = () => {
  const { countries, isLoading, isError, onHendleSubmit } = useFetchByRegion();
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onHendleSubmit} />
        {isError && <Heading textAlign="center">Something wrong...</Heading>}
        {isLoading && <Loader></Loader>}
        {countries.length > 0 && (
          <CountryList countries={countries}></CountryList>
        )}
      </Container>
    </Section>
  );
};
