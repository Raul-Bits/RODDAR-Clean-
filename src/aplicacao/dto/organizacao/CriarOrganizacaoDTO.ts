import { TipoOrganizacao } from '../../../dominio/entidade/Organizacao'

export type CriarOrganizacaoInput = {
    usuarioId: string
    nome: string
    tipo: TipoOrganizacao
}

export type CriarOrganizacaoOutput = {
    id: string
    usuarioId: string
    nome: string
    tipo: TipoOrganizacao
    ativa: boolean
    criadoEm: Date
}