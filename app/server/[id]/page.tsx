// Exemple pour pages/server/[id].tsx
import { GetServerSideProps, NextPage } from 'next';
import { PokemonDetails } from '@/app/types/page';

interface DetailsProps {
  pokemon: PokemonDetails;
}

export const getServerSideProps: GetServerSideProps<DetailsProps> = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon: PokemonDetails = await res.json();

  return {
    props: {
      pokemon,
    },
  };
};

const DetailsPage: NextPage<DetailsProps> = ({ pokemon }) => (
  <div>
    <img src={pokemon.sprites.front_default} alt={`Image de ${pokemon.name}`} />
    <h1>{pokemon.name}</h1>
    <p>Taille : {pokemon.height}</p>
    <p>Poids : {pokemon.weight}</p>
    <p>Types : {pokemon.types.map((type) => type.type.name).join(', ')}</p>
    <p>Numéro : {pokemon.order}</p>
  </div>
);

export default DetailsPage;
