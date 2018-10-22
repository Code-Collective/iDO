import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const PlanningListDetail = (props) => {

  return (
    <Card>
      <CardSection>
        <View></View>
        <View>
          <Text>{props.venue.name}</Text>
          <Text>{props.venue.location.address}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

export default PlanningListDetail;