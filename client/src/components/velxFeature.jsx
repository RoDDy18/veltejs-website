import { VelteElement } from "velte"
import { global } from "../store/global"

//assets
import VelXImgDark from "../assets/images/velx_dark.png"
import VelXImgLight from "../assets/images/velx_light.png"

//components
import Button from "./button"

const VelXFeature = ({})=>{
    return (
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:pb-48 pb-20">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div className="relative ml-4">
                    <Choose>
                        <When condition={global.state.isDark}>
                            <img className="w-full rounded-md" src={VelXImgDark} alt="Counter Component Dark"/>
                        </When>
                        <Otherwise>
                            <img className="w-full rounded-md" src={VelXImgLight} alt="Counter Component Light"/>
                        </Otherwise>
                    </Choose>
                    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0 hidden md:block"></div>
                </div>
                <div>
                    <h1 className="md:text-4xl font-bold text-2xl mb-5">Introducing <span className="text-primary">VelX</span></h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400 pb-3">VelX is an event driven proxy state management pattern for Velte applications.<br/> It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion.</p>
                    <Button text="Learn VelX" icon={<i className="i-uil-arrow-circle-right"></i>} link="https://veltejsdocs.cyclic.app/velx/intro"/>
                </div>


            </div>
        </div>
    )
}

export default VelXFeature