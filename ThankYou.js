import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class ThankYou extends Component {
    render() {
        return (
            <View>
                <Text>
                    Thank you for adding your qualification
                </Text>
                <Button title='Go to qualifications'
                    onPress={
                        () => this.props.navigation.navigate('QualificationList')
                    }
                />
            </View>
        )
    }
};

export default ThankYou