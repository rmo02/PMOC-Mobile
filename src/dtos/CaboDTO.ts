import { DadosGeraisDTO } from "./DadosGerais"

export type CaboDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "modelo": string;
    "tipo": string;
    "tamanho": number;
    "category": string;
}