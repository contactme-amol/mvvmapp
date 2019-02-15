import React, {PureComponent} from 'react';
import { View } from 'react-native';
import { inject } from 'mobx-react';

import LoginService from '../model/services/LoginService';
import LoginViewModel from '../view_model/LoginViewModel';
import RootStore from '../stores/RootStore';
import LoginViewController from '../view_controller/LoginViewController';

@inject(RootStore.type.POKEMON_MODEL)
class LoginProvide extends PureComponent {
    constructor(props) {
        super(props);
        const loginService = props[RootStore.type.EMPLOYEE_MODEL];
        this.loginViewModel = new LoginViewModel(loginService);
    }

    render() {
        return (
            <LoginViewController loginViewModel={this.loginViewModel} />
        )
    }
}

export default LoginProvide;