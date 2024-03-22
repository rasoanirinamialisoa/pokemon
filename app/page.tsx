// pages/client/page.tsx
import { GetServerSideProps } from 'next';
import { Pokemon } from './types/page';

interface HomeProps {
  pokemons: Pokemon[];
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
  const data = await res.json();
  return {
    props: {
      pokemons: data.results,
    },
  };
};

function HomePage({ pokemons }: HomeProps) {
  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <p>{pokemon.name}</p>
          {/* Implémentez la navigation détaillée ici */}
        </div>
      ))}
    </div>
  );
}

export default HomePage;
