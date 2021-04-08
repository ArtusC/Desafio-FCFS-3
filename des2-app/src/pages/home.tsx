import {Component } from 'react'
import api  from '../utils/api'

class Home extends Component {

	state = {
		routes: [
			{title: '', 
			startPosition: {
				latitude: Number,
				longitude: Number
			},
			endPosition: {
				latitude: Number,
				longitude: Number
			}}
		] 
	}

	componentDidMount(){
	 api.get('/routes')
		.then(res => {
			this.setState({routes: res.data})
		});
	}
	render(){

		const {routes} = this.state;
		return(
			<div>
				<h1> Imersão FullCycle </h1>
				<h2> Desafio 2 </h2>
				<table>
					<thead>
						<tr>
							<th>#Rota</th>
							<th>Início da partida (Lat/Lon)</th>
							<th>Fim da partida (Lat/Lon)</th>
						</tr>
					</thead>
					<tbody>
						{routes.map(dado => 
							<tr>
								<td>{dado.title}</td>
								<td>{dado.startPosition.latitude} / {dado.startPosition.longitude}</td>
								<td>{dado.endPosition.latitude} / {dado.endPosition.longitude}</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Home