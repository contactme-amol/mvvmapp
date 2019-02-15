import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class LoginViewController extends PureComponent {

    render() {
        const { loginViewModel } = this.props;

        return (
            <View>
                <Text> Login View Controller </Text>
            </View>
        )
    }

}

export default LoginViewController;