import { DadosGeraisDTO } from "./DadosGerais"

export type ExaustorDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "category": string
}