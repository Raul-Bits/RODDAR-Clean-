import { UsuarioBD } from "../../infraestrutura/bd/mySQL/UsuarioBD";
import { OrganizacaoBD } from "../../infraestrutura/bd/mySQL/OrganizacaoBD";
import { CriarOrganizacao } from "../../aplicacao/casoDeUso/organizacao/CriarOrganizacao";
import { OrganizacaoController } from "../../infraestrutura/web/express/controle/OrganizacaoController";

export function criarOrganizacaoController(): OrganizacaoController {
    const usuarioRepositorio = new UsuarioBD();
    const organizacaoRepositorio = new OrganizacaoBD();
    const criarOrganizacao = new CriarOrganizacao(usuarioRepositorio, organizacaoRepositorio);

    return new OrganizacaoController(criarOrganizacao);
}