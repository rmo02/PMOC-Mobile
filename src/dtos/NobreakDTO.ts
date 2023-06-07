import { DadosGeraisDTO } from "./DadosGerais"

export type NobreakDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "tensao_entrada": number;
    "tensao_saida": number;
    "category": string;
}