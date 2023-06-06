import { DadosGeraisDTO } from "./DadosGerais";

export type DPSDTO = {
    "dados_gerais": DadosGeraisDTO
    "status": string;
    "corrente_maxima": number;
    "classe": string;
    "category": string;
}


// {
//     dados_gerais: {
//       "codigo": data.codigo,
//       "marca": data.marca,
//       "modelo": data.modelo,
//     },
//     "status": data.status,
//     "corrente_maxima": data.corrente_maxima,
//     "classe": data.classe,
//     "category": "Eletrica",
// }