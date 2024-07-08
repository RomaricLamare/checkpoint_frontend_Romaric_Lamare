import { Continent } from "./continent.d";

export interface Country {
    id: number;
    code: string;
    name: string;
    emoji: string;
    continent: Continent;
}