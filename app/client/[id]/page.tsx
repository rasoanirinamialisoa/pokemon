// pages/client/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PokemonDetails } from '../../types/page';

function PokemonDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!id) return; // vérifie si l'ID est présent
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    }

    fetchData();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h1>{pokemon.name}</h1>
      <p>Taille : {pokemon.height}</p>
      <p>Poids : {pokemon.weight}</p>
      <p>Types : {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <p>Numéro : {pokemon.order}</p>
    </div>
  );
}

export default PokemonDetailsPage;
