import { VelteElement, VelteComponent } from "velte"

export default class Counter extends VelteComponent{
    state = {
        count : 0
    }

    add = ()=> {
        this.setState({count: this.state.count + 1})
    }

    subtract = ()=>{
        if(this.state.count != 0){
            this.setState({count: this.state.count - 1})
        }
    }

    render(){
        return (
            <div className="flex gap-2">
                <button disabled className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">Count is {this.state.count}</button>
                <button v-on:click={this.subtract} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary_light focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">-</button>
                <button v-on:click={this.add} className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-primary_light focus:outline-none focus:ring focus:ring-purple-300 focus:ring-opacity-80">+</button>
            </div>
        )
    }
}

