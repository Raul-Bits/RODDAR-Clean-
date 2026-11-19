import { TipoOrganizacao } from '../../../dominio/entidade/Organizacao'

export type RenomearOrganizacaoInput = {
    id: string,
    nome: string
}

export type RenomearOrganizacaoOutput = {
    id: string
    usuarioId: string
    nome: string
    tipo: TipoOrganizacao
    ativa: boolean
    criadoEm: Date
}