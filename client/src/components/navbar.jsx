import { VelteElement } from "velte"

//assets
import logo from "../assets/images/velte4.png"

const Navbar = ({}) => {
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-transparent border-b border-gray-200 text-sm py-3 md:py-0 dark:bg-transparent dark:border-gray-700">
            <nav className="relative max-w-7xl w-full mx-auto px-4 md:flex md:items-center md:justify-between md:px-6 lg:px-8" v-attr:aria-label="Global">
                <div className="flex items-center justify-between">
                    <a href="/"><img src={logo} width="50" className="pr-2"/></a>
                    <a className="hidden md:block flex-none text-xl font-semibold dark:text-white" href="/" v-attr:aria-label="Velte">Velte</a>
                    <div className="md:hidden">
                        <button v-attr:type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-transparent text-gray-700 shadow-sm align-middle hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-transparent dark:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" v-attr:data-hs-collapse="#navbar-collapse-with-animation" v-attr:aria-controls="navbar-collapse-with-animation" v-attr:aria-label="Toggle navigation">
                        <i className="i-basil-menu-solid text-primary text-xl hs-collapse-open:hidden w-6 h-6"></i>
                        {/* <svg class="hs-collapse-open:hidden w-4 h-4" v-attr:width="16" v-attr:height="16" v-attr:fill="currentColor" v-attr:viewBox="0 0 16 16">
                            <path v-attr:fill-rule="evenodd" v-attr:d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg> */}
                        <i className="i-basil-cancel-outline text-primary text-xl hs-collapse-open:block hidden w-6 h-6"></i>
                        {/* <svg class="hs-collapse-open:block hidden w-4 h-4" v-attr:width="16" v-attr:height="16" v-attr:fill="currentColor" v-attr:viewBox="0 0 16 16">
                            <path v-attr:d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg> */}
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                    <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7">
                        <a className="font-medium text-gray-500 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 hover:text-gray-400" href="https://veltejsdocs.cyclic.app/" v-attr:aria-current="page">Documentation</a>
                        <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="https://veltejsdocs.cyclic.app/category/api-reference">API</a>
                        <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:hover] md:py-4">
                            <button v-attr:type="button" className="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-gray-400 dark:hover:text-gray-500 ">
                                <span className="pr-2">Starter Kit</span>
                                <svg class="ml-2 w-3 h-3 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                                </svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-60 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:left-0 before:w-full before:h-5">
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="https://github.com/RoDDy18/velte-webpack-starter">
                                    Webpack Starter
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="https://github.com/RoDDy18/velte-rspack-starter">
                                    Rspack Starter
                                </a>
                                <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-primary dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="https://github.com/RoDDy18/velte-vite-starter">
                                    Vite Starter (Experimental)
                                </a>
                            </div>
                        </div>
                        <a className="font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500" href="https://github.com/RoDDy18/veltejs-website">Examples</a>

                        <a className="flex items-center gap-x-2 font-medium text-gray-500 md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400" href="https://www.npmjs.com/package/velte/v/2.0.0-rc.0">
                            <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-primary text-white font-source">v2.0.0-rc</span>
                        </a>
                        {/* <img src={Twitter} alt="Twitter" width="30"/>
                        <img src={GitHub} alt="Github" width="30"/> */}
                        <div className="space-x-2">
                            <a className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-primary hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary_light focus:ring-offset-2 focus:ring-offset-white transition dark:text-white dark:hover:text-white dark:hover:bg-primary dark:focus:ring-offset-slate-900" href="https://twitter.com/Emmanuelx2042/">
                                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                            </a>
                            <a className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-primary hover:text-white rounded-full focus:outline-none focus:ring-2 focus:ring-primary_light focus:ring-offset-2 focus:ring-offset-white transition dark:text-white dark:hover:text-white dark:hover:bg-primary dark:focus:ring-offset-slate-900" href="https://github.com/RoDDy18/">
                                <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar