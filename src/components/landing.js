import React, { Component } from 'react';
// import CharityList from './charityList';
import {Link } from "react-router-dom";
import ReactImageAppear from 'react-image-appear';
//npm install react-image-appear --save

const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    }
  ];

  const LoadingImage = ()=> {
  return <ReactImageAppear 
    src="../public/hands-on-paper-background.jpg"
    animation="bounceIn"
    showLoader={false}
    animationDuration="5s"
/>
}

export class Landing extends Component {
    state={
        value:'',
        show:''
     }
     handleChange=(e)=>{
        this.setState({value:e.target.value})
      }
    
    render() {

      return (
      <div className="charity">
        <LoadingImage />
        <div className="btnDiv">
            <Link to="/Charities">
                <button className="btn" variant="warning">All Charities</button>
            </Link> 
        </div> 
        <div className="search">
            {/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value={this.state.value} onChange={this.handleChange}
						id="search-input"
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>
        </div>
        <div>
      {people.filter(person => person.age == this.state.value).map(filteredPerson => (
        <li>
          {filteredPerson.name}
        </li>
      ))}
    </div>
      </div>)
    }
  }

export default Landing;
