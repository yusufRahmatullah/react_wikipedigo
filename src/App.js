import React, { Component } from 'react';
import logo from './logo_2.png';
import './App.css';

class Photo extends Component {
	handleClick(e) {
		console.log('clicked' + this.props.photo.name)
	}
	
	render() {
		const imgStyle = {
			width: 200,
			height: 200,			
			backgroundImage: 'url(' + this.props.photo.image + ')',
		};
		return (
			<div className="Photo" style={imgStyle} onClick={(e) => this.handleClick(e)}>
				<h3>{this.props.photo.name}</h3>
			</div>
		);
	}
}

class PhotosContainer extends Component {
	render() {
		var photos = [];
		this.props.photos.forEach(function(photo) {
			photos.push(<Photo photo={photo} key={photo.image} />)
		});
		return (<div className="Photos-container">{photos}</div>);
	}
}

class App extends Component {
  constructor() {
	  super();
	  this.state = {
		data: []  
	  };
  }
  
  loadData() {
	fetch("https://api.myjson.com/bins/vn4cb")
	.then(response => response.json())
	.then(json => {
		this.setState({
			data: json
		});
	});
  }
  
  componentDidMount() {
	  this.loadData();
  }
  
  render() {
    return (
      <div className="App">		
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Wikipedigo</h2>
        </div>
		<PhotosContainer photos={this.state.data} />
      </div>
    );
  }
}

export default App;
