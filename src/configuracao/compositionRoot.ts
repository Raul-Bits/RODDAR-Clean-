import { criarUsuarioController } from "./modules/usuario-module";
import { criarOrganizacaoController } from "./modules/organizacao-module";

export const controles = {
    usuarioController: criarUsuarioController(),
    organizacaoController: criarOrganizacaoController(),
};