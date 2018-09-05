import React, { Component } from 'react';
import './App.css';

class Photos extends Component {
	constructor(props) {
		super(props);
		this.state = {data:[]}
	}

	
	  componentWillMount() {
      console.log('Component WILL MOUNT!')
   }
  componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/photos')
		.then(response => response.json())
		.then(test => {this.setState({data : test})
	});

	}
   

	render() {
		return (
			<div>
				 {
          this.state.data.map((data, index) =>
          	<tr>
          	<td>{data.albumId}</td>
          	<td>{data.id}</td>
          	<td>{data.title}</td>
          	<td><a href = {data.url}>View Full Size</a></td>
          	<td><img alt="color-images" src = {data.thumbnailUrl}></img></td>

          	</tr>            
          )
        }
			</div>
		);
	}

}

export default Photos;