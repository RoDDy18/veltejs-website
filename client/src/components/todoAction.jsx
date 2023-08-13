import { VelteElement } from "velte"

//store
import { global } from "../store/global"

//assets
import TodoJSX from "../assets/images/Todo.png"
import TodoJSXLight from "../assets/images/Todo_light.png"
import TodoApp from "../assets/images/TodoApp.png"
import TodoAppLight from "../assets/images/TodoApp_light.png"

//components
import Todo from "./todo"

const Section1 = ()=>{
    return (
        <div>
            <h1 className="md:text-2xl text-3xl mt-5 text-primary text-left pl-5">Todo List</h1>
            <Choose>
                <When condition={global.state.isDark}>
                    <img src={TodoJSX} alt="Todo" width="500" className="w-4/4 rounded-md "/>
                </When>
                <Otherwise>
                    <img src={TodoJSXLight} alt="Todo Light" width="500" className="w-4/4 rounded-md "/>
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
                    <img src={TodoApp} alt="Todo App" width="500" className="w-4/4 rounded-md rotate-3"/>
                </When>
                <Otherwise>
                    <img src={TodoAppLight} alt="Todo App Light" width="500" className="w-4/4 rounded-md rotate-3"/>
                </Otherwise>
            </Choose>
        </div>
    )
}

const TodoAction = ()=>{
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
                        <Todo/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoAction