import React, {PureComponent} from 'react';
import { Provider } from 'mobx-react';
import RootStore from '../src/stores/RootStore';
import LoginProvider from '../src/provider/LoginProvider';

const rootStore = new RootStore()

class App extends PureComponent {
    render() {
        return (
            <Provider {...rootStore.getStores()}>
                <LoginProvider />
            </Provider>
        )
    }
}

export default App;