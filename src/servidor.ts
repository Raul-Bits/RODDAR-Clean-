import routes from "./infraestrutura/web/express/routes";
import { ApiExpress } from "./infraestrutura/web/express/ApiExpress";

const servidor = new ApiExpress(routes);
servidor.start(3000);