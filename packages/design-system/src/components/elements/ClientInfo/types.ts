/**
 * Interface représentant un titre.
 *
 * @interface
 * @property {string} title - Le texte du titre.
 * @property {string} idIcone - L'ID de l'icône associée au titre.
 */
export interface ITitle {
  title: string;
  idIcone: string;
}

/**
 * Objet représentant une carte.
 *
 * @interface
 * @property {ITitle} title - Le titre de la carte.
 * @property {ItemBlock[]} itemBlocks - Les blocs d'éléments de la carte.
 */
export interface CardObj {
  title: ITitle;
  itemBlocks: ItemBlock[];
}

/**
 * Objet représentant un bloc d'éléments dans une carte.
 *
 * @interface
 * @property {string} [title] - Le titre du bloc d'éléments.
 * @property {CardContent[]} elements - Les éléments du bloc.
 */
export interface ItemBlock {
  title?: string;
  elements: CardContent[];
}

/**
 * Objet représentant le contenu d'une carte.
 *
 * @interface
 * @property {ITitle} title - Le titre du contenu.
 * @property {Element[]} elements - Les éléments du contenu.
 */
export interface CardContent {
  title: ITitle;
  elements: Element[];
}

/**
 * Objet représentant un élément dans une carte.
 *
 * @interface
 * @property {string} label - L'étiquette de l'élément.
 * @property {string} [description] - La description de l'élément (optionnelle).
 */
export interface Element {
  label: string;
  description?: string;
}
