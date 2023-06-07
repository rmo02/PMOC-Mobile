import { DadosGeraisDTO } from "./DadosGerais"

export type SwitchDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "quantidade_portas": number;
    "category": string;
}