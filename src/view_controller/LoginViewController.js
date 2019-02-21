import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

class LoginViewController extends PureComponent {

    render() {
        const { loginViewModel } = this.props;

        return (
            <View style={styles.container}>
                <Text> Login View Controller </Text>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
}

export default LoginViewController;