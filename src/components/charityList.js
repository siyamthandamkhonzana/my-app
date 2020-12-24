import React, { Component } from 'react';

export class CharityList extends Component {

    render() {
      return (
      <div className="list">
        <div className="head">Header</div>
        <div className="body">
            <ul>
                <li><a target="blank" href="http://www.aids.org.za">Aids Foundation South Africa</a></li>
                <li><a target="blank" href="http://www.google.com">Google</a></li>
                <li><a target="blank" href="http://www.google.com">Google</a></li>
                <li><a target="blank" href="http://www.google.com">Google</a></li>
                <li><a target="blank" href="http://www.google.com">Google</a></li>
            </ul>
        </div>
      </div>)
    }
  }

export default CharityList;
  // <Link to={{ pathname: "http://www.google.com" }} target="_blank">link</Link>
  //https://www.brandsouthafrica.com/south-africa-fast-facts/social-facts/south-african-charities-and-community-care
  //http://www.charitysa.co.za/alphabetical-list-of-organisations