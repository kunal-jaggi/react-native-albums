import React from 'react';
import { View } from 'react-native';

//this is a functional/presentational component, no lifecycle events, no data fetching

const CardSection = (props) => {
  return(
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};


const styles = {
    containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative'
    }
};

export default CardSection;
