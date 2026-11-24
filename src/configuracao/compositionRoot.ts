import { UsuarioBD } from "../infraestrutura/bd/mySQL/UsuarioBD";
import { CadastrarUsuario } from "../aplicacao/casoDeUso/usuario/CadastrarUsuario";
import { AutenticarUsuario } from "../aplicacao/casoDeUso/usuario/AutenticarUsuario";
import { UsuarioController } from "../infraestrutura/web/express/controle/UsuarioController";

import { OrganizacaoBD } from "../infraestrutura/bd/mySQL/OrganizacaoBD";
import { CriarOrganizacao } from "../aplicacao/casoDeUso/organizacao/CriarOrganizacao";
import { OrganizacaoController } from "../infraestrutura/web/express/controle/OrganizacaoController";

// Usuário
const usuarioRepositorio = new UsuarioBD();
const cadastrarUsuario = new CadastrarUsuario(usuarioRepositorio);
const autenticarUsuario = new AutenticarUsuario(usuarioRepositorio);

// Organização
const organizacaoRepositorio = new OrganizacaoBD();
const criarOrganizacao = new CriarOrganizacao(usuarioRepositorio, organizacaoRepositorio);

export const controles = {
    usuarioController: new UsuarioController(cadastrarUsuario, autenticarUsuario),
    organizacaoController: new OrganizacaoController(criarOrganizacao),
};