// types/index.ts
export interface Pokemon {
    name: string;
    url: string;
  }
  
  export interface PokemonDetails {
    sprites: {
      front_default: string;
    };
    name: string;
    height: number;
    weight: number;
    types: Array<{
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }>;
    order: number;
  }
  