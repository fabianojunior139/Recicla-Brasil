import Empresa from "../models/Empresa";

class EmpresaController {
    static listCompanies() {
        return Empresa.index();
    }

}

export default EmpresaController;