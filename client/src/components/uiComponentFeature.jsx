import { VelteElement } from "velte"

//store
import { global } from "../store/global"

//assets
import VideoImgDark from "../assets/images/video_dark.png"
import VideoImgLight from "../assets/images/video_light.png"

const UIComponentFeature = ({})=>{
    return (
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-48 py-20">
            <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
                <div className="relative ml-4 block md:hidden">
                    <Choose>
                        <When condition={global.state.isDark}>
                            <img className="w-full rounded-md" src={VideoImgDark} alt="Counter Component Dark"/>
                        </When>
                        <Otherwise>
                            <img className="w-full rounded-md" src={VideoImgLight} alt="Counter Component Light"/>
                        </Otherwise>
                    </Choose>
                    {/* <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div> */}
                </div>
                <div>
                    <h1 className="md:text-4xl font-bold text-2xl mb-5">Create user interfaces from components</h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Velte lets you build user interfaces out of individual pieces called components.<br/> Create your own Velte components like Thumbnail, LikeButton, and Video.<br/> Then combine them into entire screens, pages, and apps.</p>
                </div>

                <div className="relative ml-4 hidden md:block">
                    <Choose>
                        <When condition={global.state.isDark}>
                            <img className="w-full rounded-md" src={VideoImgDark} alt="Counter Component Dark"/>
                        </When>
                        <Otherwise>
                            <img className="w-full rounded-md" src={VideoImgLight} alt="Counter Component Light"/>
                        </Otherwise>
                    </Choose>
                    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
                </div>
            </div>
        </div>
    )
}

export default UIComponentFeature