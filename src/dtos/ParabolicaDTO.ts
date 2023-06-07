import { DadosGeraisDTO } from "./DadosGerais"

export type ParabolicaDTO = {
    "dados_gerais": DadosGeraisDTO;
    "status": string;
    "diametro": number;
    "satelite": string;
    "receptor": string;
    "category": string;
}