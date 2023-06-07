import { DadosGeraisDTO } from "./DadosGerais"

export type DisjuntosDTO = {
    "dados_gerais": DadosGeraisDTO;
    "corrente_maxima": number;
    "category": string;
}