import { Router } from "express";
import UsuarioRoutes from "./UsuarioRoutes";
import OrganizacaoRoutes from "./OrganizacaoRoutes";

const router: Router = Router();

router.use(UsuarioRoutes);
router.use(OrganizacaoRoutes);

export default router;