import React, { Component } from 'react'

class Button extends Component {
	handleClick = () => {
		var foo = 'asdfasdf'
		var a = 'asdfasdf'
		var b = 'asdfasdf'
		var c = 'asdfasdf'
		var d = 'asdfasdf'
		console.log('hello', foo)
	}
	render() {
		return <button onClick={this.handleClick}>{this.props.actionName}</button>
	}
}

export default Button
