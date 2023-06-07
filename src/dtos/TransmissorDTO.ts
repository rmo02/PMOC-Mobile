import { DadosGeraisDTO } from "./DadosGerais"

export type TransmissorDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "programmed_power": number;
    "canal_fisico": number;
    "canal_virtual": number;
    "receptor": string;
    "antena": string;
    "category": string;
}