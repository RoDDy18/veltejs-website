import { VelteElement, PureVelteComponent } from "velte"
import { global } from "../store/global"

//assets
import CounterImgDark from "../assets/images/counter_dark.png"
import CounterImgLight from "../assets/images/counter_light.png"

//components
import NPMInstall from "./npm"
import Button from "./button"


class Hero extends PureVelteComponent{
    render(){
        return (
            <div>
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center text-center md:text-left">
                        <div>
                            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">The Cordial JS Framework for <span className="text-primary">Web Developers.</span></h1>
                            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Build your next application with velte, why?<br/> It's simple, velte takes the wheel and makes it easier to roll with.<br/> A cordial, performant and versatile framework for building web user interfaces.</p>
    
                            <div className="mt-7 grid gap-3 md:w-full sm:inline-flex flex-col md:flex-row">
                                <Button text="Get started" icon={<i className="i-uil-arrow-circle-right"></i>} link="https://veltejsdocs.cyclic.app"/>
                                <NPMInstall/>
                            </div>
                        </div>
    
                        <div className="relative ml-4">
                            <Choose>
                                <When condition={global.state.isDark}>
                                    <img className="w-full rounded-md rotate-3" src={CounterImgDark} alt="Counter Component Dark"/>
                                </When>
                                <Otherwise>
                                    <img className="w-full rounded-md rotate-3" src={CounterImgLight} alt="Counter Component Light"/>
                                </Otherwise>
                            </Choose>
                            {/* <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero