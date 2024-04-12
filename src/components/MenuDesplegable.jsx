import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
export function MenuDesplegable() {
  return (
    <>
        <div className="menu-despliegue">
            <div className="menu-despliegue-conteiner">
                <div className='flex flex-row'>
                    
                    <Sidebar className='h-screen' backgroundColor="rgb(0, 249, 249)">
                        
                        <div className="logo-menu">
                            <img src="src\assets\img\logoMenu_2.png" alt="" />
                        </div>
                        <div className="sidebar-content">
                            <Menu className='text-gray-100 '>
                                <SubMenu label="PERSONAL" >
                                    <MenuItem className='bg-zinc-800'> Ficha del personal </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Contratos </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Derecho habiente </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Control de permisos </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Control de asistencias </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Adelantos y/o Asistencia </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Prestamos </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Pre-Pos Natal / Bonificaciones </MenuItem>
                                </SubMenu>
                                <SubMenu label="ASIGNACION CONCEPTOS">
                                    <MenuItem className='bg-zinc-800'> Conceptos por trabajador </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Conceptos por sede </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Aplicar a todos </MenuItem>
                                </SubMenu>
                                <SubMenu label="TABLAS">
                                    <MenuItem className='bg-zinc-800'> Iniciar periodo </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Declarantes </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Sede </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Centro de costos </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Cargo </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Departamento </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Moneda </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Conceptos </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Comisión AFPs </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Régimen pensionario </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Turno </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Montos por hora </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Bancos </MenuItem>
                                    <MenuItem className='bg-zinc-800'> Tipo de cambio </MenuItem>
                                </SubMenu>
                            </Menu>
                        </div>
                        
                    </Sidebar>
                    <main className='h-screen w-screen bg-gray-100'>
                        <h1 className='text-2xl font-bold'>Nya</h1>
                    </main>
                </div>
            </div>
        </div>
    </>
  )
}
