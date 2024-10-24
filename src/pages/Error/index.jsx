import { Link } from "react-router-dom"
export function Error(){
    return(
        <div>
            <h1>Error Pagina não encontrada 404!</h1>
            <button>
                <Link to="/home" >Voltar</Link>
            </button>
        </div>
    )
}