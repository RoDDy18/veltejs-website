import { VelteElement } from "velte"

//assets
import AnotherCounter from "../assets/images/AnotherCounter.png"
import AnotherCounterLight from "../assets/images/AnotherCounter_light.png"
import CounterApp from "../assets/images/CounterApp.png"
import CounterAppLight from "../assets/images/CounterApp_light.png"

//components
import Counter from "./counter"

//store
import { global } from "../store/global"

const Section1 = ()=>{
    return (
        <div>
            <h1 className="md:text-2xl text-3xl mt-5 text-primary text-left pl-5">Counter</h1>
            <Choose>
                <When condition={global.state.isDark}>
                    <img src={AnotherCounter} alt="Another Counter" width="500" className="w-4/4 rounded-md"/>
                </When>
                <Otherwise>
                    <img src={AnotherCounterLight} alt="Another Counter Light" width="500" className="w-4/4 rounded-md"/>
                </Otherwise>
            </Choose>
        </div>
    )
}

const Section2 = ()=>{
    return (
        <div className="flex items-center justify-center">
            <Choose>
                <When condition={global.state.isDark}>
                    <img src={CounterApp} alt="Another Counter App" width="500" className="w-4/4 rounded-md -rotate-3"/>
                </When>
                <Otherwise>
                    <img src={CounterAppLight} alt="Another Counter App Light" width="500" className="w-4/4 rounded-md -rotate-3"/>    
                </Otherwise>
            </Choose>
        </div>
    )
}

const CounterAction = ({}) =>{
    return (
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center content-center mb-10">
            <div className="flex items-center justify-center">
                <Section1 $store={global}/>
            </div>
            <div className="grid md:grid-rows-2 gap-4 md:gap-8 xl:gap-20 md:items-center content-center">
                <Section2 $store={global}/>
                <div className="flex items-center justify-center">
                    <div>
                        <h1 className="md:text-2xl text-2xl my-5 text-primary text-left">Running Example</h1>
                        <Counter $store={global}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterAction