import { UsuarioBD } from "../../infraestrutura/bd/mySQL/UsuarioBD";
import { CadastrarUsuario } from "../../aplicacao/casoDeUso/usuario/CadastrarUsuario";
import { AutenticarUsuario } from "../../aplicacao/casoDeUso/usuario/AutenticarUsuario";
import { UsuarioController } from "../../infraestrutura/web/express/controle/UsuarioController";

export function criarUsuarioController(): UsuarioController {
    const usuarioRepositorio = new UsuarioBD();
    const cadastrarUsuario = new CadastrarUsuario(usuarioRepositorio);
    const autenticarUsuario = new AutenticarUsuario(usuarioRepositorio);

    return new UsuarioController(cadastrarUsuario, autenticarUsuario);
}