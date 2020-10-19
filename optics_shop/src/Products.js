import React, { Component } from 'react';

const people = [
	{
		id: 0,
		first: 'Faraz',
		last: 'ali',
		age: '22'
	},
	{
		id: 1,
		first: 'Talha',
		last: 'Mansoor',
		age: '23'
	},
	{
		id: 2,
		first: 'Hamza',
		last: 'Khan',
		age: '22'
	}
];

class Products extends Component {
	render() {
		return (
			<div>
				{people.map(function(person) {
					return (
						<div key={person.id}>
							<h1> {person.first}</h1>
							<h1> {person.last}</h1>
							<h3> {person.age}</h3>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Products;
