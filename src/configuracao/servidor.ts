import express from 'express'
import { UsuarioBD } from '../infraestrutura/bd/mySQL/UsuarioBD'
import { CadastrarUsuario } from '../aplicacao/casoDeUso/usuario/CadastrarUsuario'
import { AutenticarUsuario } from '../aplicacao/casoDeUso/usuario/AutenticarUsuario'
import { UsuarioController } from '../infraestrutura/web/UsuarioController'
import { OrganizacaoBD } from '../infraestrutura/bd/mySQL/OrganizacaoBD'
import { CriarOrganizacao } from '../aplicacao/casoDeUso/organizacao/CriarOrganizacao'
import { OrganizacaoController } from '../infraestrutura/web/OrganizacaoController'

const app = express()
app.use(express.json())

// Usuario
const usuarioRepositorio = new UsuarioBD()
const cadastrarUsuario = new CadastrarUsuario(usuarioRepositorio)
const autenticarUsuario = new AutenticarUsuario(usuarioRepositorio)
const usuarioController = new UsuarioController(cadastrarUsuario, autenticarUsuario)
// Organização
const organizacaoRepositorio = new OrganizacaoBD()
const criarOrganizacao = new CriarOrganizacao(usuarioRepositorio, organizacaoRepositorio)
const organizacaoController = new OrganizacaoController(criarOrganizacao)

app.post('/usuarios', (req, res) => usuarioController.cadastrar(req, res))
app.post('/login', (req, res) => usuarioController.autenticar(req, res))
app.post('/organizacoes', (req, res) => organizacaoController.criar(req,res))

app.listen(3000, () => {
    console.log('Servidor Roddar rodando na porta 3000')
})