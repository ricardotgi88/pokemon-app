import { PokemonAttackModel } from './pokemon-attack.model';
import { TypeValueModel } from './type-value.model';

export class PokemonModel {
    // Imagem da carta
    imageUrl: string;
    // Nome do Pokemon
    name: string;
    // ID do Pokemon
    id: string;
    // Tipo(s)


    // Imagem em alta definição
    imageUrlHiRes: string;
    // Tipo(s)
    types: string[];
    // Resistencia(s)
    resistances: TypeValueModel[];
    // Fraqueza(s)
    weaknesses: TypeValueModel[];
    // Lista de nomes dos ataques do pokémon ao clicar exibir a modal de detalhe
    attacks: PokemonAttackModel[];
}
