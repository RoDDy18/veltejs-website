import { VelteElement, VelteComponent } from "velte"

export default class Todo extends VelteComponent{
    state = {
        list: [],
        text: ""
    }

    addTodo = (e)=>{
        e.preventDefault()
        let { list, text } = this.state
        if(text && text!= " "){
            list = list.concat({ text })
            this.setState({ list, text: "" })
        }
    }

    setText = (e)=>{
        this.setState({text: e.target.value})
    }

    render(){
        return (
            <div>
                <form v-on:submit={this.addTodo}>
                    <input className="my-2 placeholder-gray-400/70 dark:placeholder-gray-500 rounded-l-lg border border-gray-200 border-r-0 bg-gray-200 px-5 py-2.5 text-gray-700 focus:border-primary focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-40 dark:border-gray-600 dark:bg-secondary dark:text-gray-300 dark:focus:border-purple-300" type="text" v-on:input={this.setText} value={this.state.text} placeholder="Enter Todo List Items"/>
                    <button className="px-6 py-3 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-r-lg focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">Add to List</button>
                </form>
                <Choose>
                    <When condition={this.state.list.length > 0}>
                        <ol className="list-decimal text-left mt-5">
                            <For each="listItem" of={this.state.list}>
                                <li className="dark:text-white text-black">{listItem}</li>
                            </For>
                        </ol>
                    </When>
                    <Otherwise>
                        No Items in todo
                    </Otherwise>
                </Choose>
            </div>
        )
    }
}