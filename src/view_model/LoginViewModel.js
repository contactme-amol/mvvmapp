class LoginViewModel {
    constructor(employeeStore) {
        this.store = employeeStore
    }

    getEmployees() {
        return this.store.getEmployees()
    }

    addEmployee(employee) {
        this.store.addEmployee(employee)
    }

    remove(employee) {
        this.store.removeEmployee(employee)
    }
}

export default LoginViewModel;