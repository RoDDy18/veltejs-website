import { VelteElement } from "velte"

const Layout = (...children)=> {
    return (
        <div className="flex h-screen items-center justify-center font-poppins bg-contour-pattern-light dark:bg-contour-pattern">
           {children} 
        </div>
    )
}

export default Layout