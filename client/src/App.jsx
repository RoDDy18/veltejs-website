import { VelteElement, VelteRender } from "velte"
import {router, query} from "./router"
import "./misc/theme"
import "./main.css"
import("preline")

//components
import Layout from "./components/layout"

//routes
import Home from "./routes/home"
import NotFound from "./routes/404"

//store
import { global } from "./store/global"


router.get("/", function(req, router){
    renderPage(<Home/>)
}).setName("Home")

router.notFoundHandler(function(){
    renderPage(Layout(<NotFound $store={global}/>))
})

const renderPage = (page)=>{
    VelteRender(page, document.getElementById("app"))
}

router.init()