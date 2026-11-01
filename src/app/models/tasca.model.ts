export type CategoriaTasca = 'Estudi' | 'Pràctica' | 'Lliurament' | 'Personal' | 'Reunió';

export const CATEGORIES_TASCA: CategoriaTasca[] = ['Estudi', 'Pràctica', 'Lliurament', 'Personal', 'Reunió'];

export interface Tasca {
  id: number;
  titol: string;
  descripcio: string;
  categoria: CategoriaTasca;
  dataLimit: Date;
  horesEstimades: number;
  prioritaria?: boolean;
}

export interface FiltresTasca {
  text: string;
  categoria: CategoriaTasca | '';
}
