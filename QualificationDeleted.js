import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class QualificationDeleted extends Component {
    render() {
        return (
            <View>
                <Text>
                    The information was deleted successfully!
                </Text>
                <Button title='Back'
                    onPress={
                        () => this.props.navigation.navigate('QualificationList')
                    }
                />
            </View>
        )
    }
};

export default QualificationDeleted
