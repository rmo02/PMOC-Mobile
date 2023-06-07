import { DadosGeraisDTO } from "./DadosGerais"

export type CombinadoDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "category": string;
}