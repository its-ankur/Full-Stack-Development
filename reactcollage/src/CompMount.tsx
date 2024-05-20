import React from "react"
type state = {
    character: {name: string}
}
export default class CompMount extends React.Component<any,state> {
    state = {
        character: {name: ""}
    }
    
    /**
     * Challenge:
     * 
     * Save the Star Wars character object in state! Then,
     * display the `name` property of the character on the
     * screen.
     */
    
    componentDidMount() {
        console.log("componentDidMount")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data =>{
                this.setState({character: data})
            })
    }
    
    render() {
        console.log("render")
        return (
            <h1>{this.state.character.name}</h1>
        )
    }
}
