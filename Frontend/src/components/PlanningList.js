import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class PlanningList extends Component {

  state = { items: [] };

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
      this.setState({ items: response.data })
      // console.log("RESPONSE: ", response.data.response.venues)
    ).catch(error => 
      console.log("Error: ", error)
    );

  }

  render() {
    console.log(this.state);
    return(
      <View>
        <Text>Wedding Planning List!!</Text>
      </View>
    );
  }
}


export default PlanningList;