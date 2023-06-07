import { DadosGeraisDTO } from "./DadosGerais";

export type DPSDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "corrente_maxima": number;
    "classe": string;
    "category": string;
}
