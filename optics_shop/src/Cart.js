import React, { Component } from 'react';
import Products from './Products';

export class Cart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			buyItems: ['milk', 'bread', 'fruit'],
			message: ''
		};
	}

	addItem(e) {
		e.preventDefault();
		const { buyItems } = this.state;
		const newItem = this.newItem.value;

		const isOnTheList = buyItems.includes(newItem);

		if (isOnTheList) {
			this.setState({
				message: 'This item is already on the list.'
			});
		} else {
			newItem !== '' &&
				this.setState({
					buyItems: [...this.state.buyItems, newItem],
					message: ''
				});
		}

		this.addForm.reset();
	}

	removeItem(item) {
		const newBuyItems = this.state.buyItems.filter(buyItem => {
			return buyItem !== item;
		});

		this.setState({
			buyItems: [...newBuyItems]
		});

		if (newBuyItems.length === 0) {
			this.setState({
				message: 'No items on your list, add some.'
			});
		}
	}

	clearAll() {
		this.setState({
			buyItems: [],
			message: 'No items on your list, add some.'
		});
	}
	render() {
		const { buyItems, message } = this.state;
		return (
			<div style={{ marginTop: '100px' }}>
				<h1 className='text-center'>Shopping List</h1>
				<div className='container'>
					<form
						style={{ marginLeft: '426px' }}
						ref={input => (this.addForm = input)}
						className='form-inline text-center'
						onSubmit={e => {
							this.addItem(e);
						}}
					>
						<div className='form-group'>
							<label className='sr-only' htmlFor='newItemInput'>
								Add New Item
							</label>
							<input
								ref={input => (this.newItem = input)}
								type='text'
								placeholder='Bread'
								className='form-control'
								id='newItemInput'
							></input>
						</div>
						<button type='submit' className='btn btn-primary'>
							Add
						</button>
					</form>
				</div>

				<div className='container text-center'>
					{(message !== '' || buyItems.length === 0) && (
						<p className='message text-danger'>{message}</p>
					)}

					{buyItems.length > 0 && (
						<table class='table table-dark'>
							<thead>
								<tr>
									<th scope='col'>#</th>
									<th scope='col'>Item</th>
									<th scope='col'>Action </th>
								</tr>
							</thead>
							<tbody>
								{buyItems.map(item => {
									return (
										<tr key={item}>
											<th scope='row'>1</th>
											<td>{item}</td>
											<td>
												<button
													onClick={e => this.removeItem(item)}
													type='button'
													className='btn btn-danger btn-sm'
												>
													Remove
												</button>
											</td>
										</tr>
									);
								})}
							</tbody>
							<tfoot>
								<td colSpan='2'></td>
								<td className='text-right'>
									<button
										onClick={e => this.clearAll()}
										className='btn btn-danger btn-sm'
									>
										Clear List
									</button>
								</td>
							</tfoot>
						</table>
					)}
				</div>
			</div>
		);
	}
}
