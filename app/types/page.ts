// types/index.ts
export interface PokemonBasicInfo {
    name: string;
    url: string;
  }
  
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
    types: PokemonType[];
    order: number;
  }
  
  export interface PokemonType {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }
  