export type AutenticarUsuarioInputDTO = {
    email: string
    senha: string
}

export type AutenticarUsuarioOutputDTO = {
    id: string
    nome: string
    email: string
}