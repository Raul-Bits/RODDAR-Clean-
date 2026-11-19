export type CadastrarUsuarioInputDTO = {
    nome: string
    email: string
    senha: string
}

export type CadastrarUsuarioOutputDTO = {
    id: string
    nome: string
    email: string
    criadoEm: Date
}