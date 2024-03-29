import { Language } from "./language.interface";

export interface Print {
  id: string,
  image_uri: string,
  artist: string;
  rarity: string,
  set_id: string,
  set_name: string,
  set_code: string,
  set_icon: string,
  set_release_date: string,
  foil: boolean,
  nonfoil: boolean,
  border: string,
  digital: boolean,
  languages: Language[],
  lang: Language,
  is_collected: boolean,
  is_foil_version: boolean
}
