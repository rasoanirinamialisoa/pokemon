// Exemple pour pages/server/index.tsx
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Pokemon } from '../types/page';

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

const HomePage = ({ pokemons }: HomeProps) => (
  <div>
    {pokemons.map((pokemon, index) => (
      <div key={index}>
        <p>{pokemon.name}</p>
        <Link href={`/server/${pokemon.name}`}>Détails</Link>
      </div>
    ))}
  </div>
);

export default HomePage;
