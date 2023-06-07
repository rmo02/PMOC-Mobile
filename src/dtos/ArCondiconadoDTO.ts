import { DadosGeraisDTO } from "./DadosGerais"

export type ArCondionadoDTO = {
    "dados_gerais": DadosGeraisDTO,
    "status": string;
    "potencia": number;
    "tensao": number;
    "category": string;
}