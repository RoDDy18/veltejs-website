import { VelteElement } from "velte"

const copyText = async ()=>{
    await navigator.clipboard.writeText("npm i -g create-velte-app")
}

const NPMInstall = ({}) =>{
    return (
        <button className="relative group inline-flex justify-center items-center gap-x-3.5 text-center bg-transparent border hover:border-primary_light hover:text-primary_light shadow-sm font-mono text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition p-2 pl-4 dark:bg-transparent dark:border-gray-500 dark:hover:border-primary dark:text-white dark:hover:text-primary dark:focus:ring-primary dark:focus:ring-offset-gray-800" v-on:click={()=>copyText()}>
            $ npm i -g create-velte-app
            <span className="flex justify-center items-center bg-primary_light rounded-md w-7 h-7 dark:bg-primary dark:text-gray-200">
                <i className="i-uil-clipboard text-xl text-white"></i>
            </span>
        </button>
    )
}

export default NPMInstall