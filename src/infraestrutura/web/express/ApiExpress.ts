import express, { Express, Router } from "express";
import { ApiWeb } from "../ApiWeb";

export class ApiExpress implements ApiWeb<Router> {
    private readonly app: Express;

    constructor(routes: Router) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(routes);
    }

    public start(port: number): void {
        this.app.listen(port, () => {
            console.log(`Servidor Roddar rodando na porta ${port}`);
        });
    }
}