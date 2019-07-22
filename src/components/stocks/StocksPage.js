import React from 'react'

class StocksPage extends React.Component {

	state = {
		stock: {
			title: ""
		}
	};

	handleChange = event => {
		const stock = { ...this.state.stock, title: event.target.value };
		this.setState({ stock: stock });
	};

	handleSubmit = event => {
		event.preventDefault();
		alert(this.state.stock.title);
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h2>Stock</h2>
				<h3>Add Stock</h3>
				<input type="text" onChange={this.handleChange} value={this.state.stock.title} />
				<input type="submit" value="Save" />
			</form>
		);
	}
}

export default StocksPage;