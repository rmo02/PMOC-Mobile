import { DadosGeraisDTO } from "./DadosGerais"

export type TorreDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "tipo_estrutura": string;
    "altura": number;
    "aterramento": boolean;
    "category": string;
}