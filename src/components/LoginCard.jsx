import { Link } from "react-router-dom"
export function LoginCard() {
  return (
    <>
        <div className="card card-login">
            <div className="card-body">
                <h5 className="card-title">Login</h5>
                <form>
                    <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                    </div>
                    <Link to={"/inicio"}>
                    <button type="" className="btn btn-primary">Ingresar</button>
                    </Link>
                    <button type="" className="btn btn-primary">Cancelar</button>
                </form>
            </div>
        </div>
    </>
  )
}
