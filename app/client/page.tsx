// pages/client/index.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Pokemon } from '../types/page';

function HomePage() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
      const data = await response.json();
      setPokemons(data.results);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <p>{pokemon.name}</p>
          <Link href={`/client/${pokemon.name}`}>Détails</Link>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
