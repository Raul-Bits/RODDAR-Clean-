import { TipoOrganizacao } from "../../../dominio/entidade/Organizacao"

export type DesativarOrganizacaoInput = {
    id: string,
    ativa: boolean,
}

export type DesativarOrganizacaoOutput = {
    id: string
    usuarioId: string
    nome: string
    tipo: TipoOrganizacao
    ativa: boolean
    criadoEm: Date
}