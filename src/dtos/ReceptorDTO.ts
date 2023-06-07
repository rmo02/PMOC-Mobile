import { DadosGeraisDTO } from "./DadosGerais"

export type ReceptorDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "channel": number;
    "frequency": number;
    "symbol_rate": number;
    "transmissor": string;
    "parabolica": string;
    "category": string;
}