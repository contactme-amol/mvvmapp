import { observable, action } from 'mobx'
import LoginViewModel from '../view_model/LoginViewModel';
import LoginService from '../model/services/LoginService';

class RootStore {
    static type = {
        EMPLOYEE_MODEL: 'employeemodel'
    }

    constructor() {
        this.loginService = new LoginService();
    }

    getStores = () => ({
        [RootStore.type.EMPLOYEE_MODEL]: this.loginService
    })
}

export default RootStore;