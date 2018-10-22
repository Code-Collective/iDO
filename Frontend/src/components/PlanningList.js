import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import PlanningListDetail from './PlanningListDetail'

class PlanningList extends Component {

  state = { venues: [] };

  componentWillMount(){
    const url = 'https://api.foursquare.com/v2/venues/search'
    const params = {
      v: '20180323', 
      ll: '51.5074,0.1278', 
      query: 'wedding',
      client_id: 'HZ3IME3HO3XORB5OVTU0DPQPSHRWCBK43VJLQJN1HVG40JJY', 
      client_secret: 'EHDPBVEZUSFO0N23XEMCAB2IOJHALFZ4V24LEPZFF01NMNM0'
    }

    axios.get(url, {
      headers: {'Accept': 'application/json'},
      params: params
    }).then(response => 
      this.setState({ venues: response.data.response.venues })
      // console.log("RESPONSE: ", response.data.response.venues)
    ).catch(error => 
      console.log("Error: ", error)
    );

  }

  renderVenues(){
    return this.state.venues.map(venue => 
      <PlanningListDetail key={venue.id} venue={venue} />
    ); 
  }

  render() {
    console.log(this.state);
    return(
      <View>
        {this.renderVenues()}
      </View>
    );
  }
}


export default PlanningList;