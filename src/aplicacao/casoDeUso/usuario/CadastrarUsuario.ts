import { Usuario } from '../../../dominio/entidade/Usuario'
import { UsuarioRepositorio } from '../../../dominio/interface/UsuarioRepositorio'
import { CadastrarUsuarioInputDTO, CadastrarUsuarioOutputDTO } from '../../dto/usuario/CadastrarUsuarioDTO'

export class CadastrarUsuario {
    constructor(private readonly usuarioRepositorio: UsuarioRepositorio) {}