import { DadosGeraisDTO } from "./DadosGerais"

export type AntenaDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "gain": string;
    "fendas": number;
    "tipo": string;
    "vr": string;
    "posicao_torre": number;
    "category": string;
}