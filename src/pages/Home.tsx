import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Section from '../components/Section';
import Sort from '../components/Sort';
import { CategoryMap } from '../const';
import { Category, useFetchPizza } from '../hooks/useFetchPizza';
import { selectPizzaItems, selectPizzaLoading } from '../redux/pizza/selectors';
import { selectSearchValue } from '../redux/search/selectors';
import { selectSortValue } from '../redux/sort/selectors';

const Home: React.FC = () => {
  const pizzaItems = useSelector(selectPizzaItems);
  const sortValue = useSelector(selectSortValue);
  const searchValue = useSelector(selectSearchValue);
  const isLoading = useSelector(selectPizzaLoading);
  const { category = '' } = useParams() as { category: Category };

  useFetchPizza({ category, sortValue, searchValue });

  return !pizzaItems.length && !isLoading ? (
    <Section title={CategoryMap[category]} rightColumnElement={<Search />}>
      <p className="placeholder">Ничего не найдено</p>
    </Section>
  ) : (
    <Section
      title={CategoryMap[category]}
      leftColumnElement={<Sort />}
      rightColumnElement={<Search />}>
      <CardList items={pizzaItems} isLoading={isLoading} />
    </Section>
  );
};

export default Home;
