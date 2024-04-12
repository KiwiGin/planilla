import { MenuHeader } from "./components/MenuHeader";

export function Layout({children}) {
  return (
    <>
        <MenuHeader />
        <div className="contenido">
            {children}
        </div>
    </>
  )
}
