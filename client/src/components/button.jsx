import { VelteElement } from "velte"

const Button = ({text, icon, link})=>{
    return (
        <div>
            <Choose>
                <When condition={link}>
                    <a className="inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-primary_light border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href={link}>
                        {text} {icon}
                    </a>
                </When>
                <Otherwise>
                    <button className="inline-flex justify-center items-center gap-x-3 text-center bg-primary hover:bg-primary_light border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                        {text} {icon}
                    </button>
                </Otherwise>
            </Choose>
        </div>
    )
}

export default Button