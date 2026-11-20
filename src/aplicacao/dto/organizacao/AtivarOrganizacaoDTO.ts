import { TipoOrganizacao } from "../../../dominio/entidade/Organizacao"

export type AtivarOrganizacaoInput = {
    id: string,
    ativa: boolean,
}

export type AtivarOrganizacaoOutput = {
    id: string
    usuarioId: string
    nome: string
    tipo: TipoOrganizacao
    ativa: boolean
    criadoEm: Date
}