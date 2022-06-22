import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class QualificationDeleted extends Component {
    render() {
        return (
            <View>
                <Text>
                    The qualification has been deleted.
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

export default QualificationDeleted