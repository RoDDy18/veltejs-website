import { VelteElement, PureVelteComponent } from "velte"

//store
import { global } from "../store/global"

//components
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import Features from "../components/features"
import NPMInstall from "../components/npm"
import Button from "../components/button"
import Footer from "../components/footer"
import ThemeToggle from "../components/themeToggle"
import UIComponentFeature from "../components/uiComponentFeature"
import VelXFeature from "../components/velxFeature"
import CounterAction from "../components/counterAction"
import TodoAction from "../components/todoAction"

class Home extends PureVelteComponent{
    render(){
        return (
            <div className="font-poppins">
                <div className="dark:bg-contour-pattern bg-contour-pattern-light h-auto lg:h-screen mb-10">
                    <Navbar/>
                    <div className="p-10 h-full pb-20">
                        <div className="flex items-center justify-center h-full">
                            <Hero $store={global}/>
                        </div>
                    </div>
                </div>
                <div className="p-10">
                    <h1 className="md:text-4xl font-bold text-2xl mb-5 text-center">A different Kind of UI Framework</h1>
                    <Features $store={global}/>
                    <UIComponentFeature $store={global}/>
                    <VelXFeature $store={global}/>
                    <div className="text-center my-5">
                        <h1 className="md:text-4xl font-bold text-2xl mb-5">See Velte in Action!!</h1>
                        <CounterAction/>
                        <TodoAction/>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-10 py-10 dark:bg-contour-pattern bg-contour-pattern-light">
                    <div>
                        <h1 className="md:text-4xl font-bold text-2xl mb-5 text-center">Ready to Get Started?</h1>
                        <div className="mt-7 flex gap-3 w-full flex-col md:flex-row items-center">
                            <Button text="Documentation" icon={<i className="i-uil-arrow-circle-right"></i>} link="https://veltejsdocs.cyclic.app"/>
                            <NPMInstall/>
                        </div>
                    </div>
                </div>
                <ThemeToggle/>
                <Footer/>
            </div>
        )
    }
}

export default Home