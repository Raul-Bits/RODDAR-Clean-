import express from 'express'
import { UsuarioBD } from '../infraestrutura/bd/mySQL/UsuarioBD'
import { CadastrarUsuario } from '../aplicacao/casoDeUso/usuario/CadastrarUsuario'
import { AutenticarUsuario } from '../aplicacao/casoDeUso/usuario/AutenticarUsuario'
import { UsuarioController } from '../infraestrutura/web/UsuarioController'

const app = express()
app.use(express.json())

const usuarioRepositorio = new UsuarioBD()
const cadastrarUsuario = new CadastrarUsuario(usuarioRepositorio)
const autenticarUsuario = new AutenticarUsuario(usuarioRepositorio)
const usuarioController = new UsuarioController(cadastrarUsuario, autenticarUsuario)

app.post('/usuarios', (req, res) => usuarioController.cadastrar(req, res))
app.post('/login', (req, res) => usuarioController.autenticar(req, res))

app.listen(3000, () => {
    console.log('Servidor Roddar rodando na porta 3000')
})