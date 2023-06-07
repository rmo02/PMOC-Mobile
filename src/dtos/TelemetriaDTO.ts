import { DadosGeraisDTO } from "./DadosGerais"

export type TelemetriaDTO = {
    "dados_gerais": DadosGeraisDTO;
    "category": string;
}