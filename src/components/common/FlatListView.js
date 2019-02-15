import React, { PureComponent } from 'react';
import { FlatList, View, Text } from 'react-native';
import FlatListItem from './FlatListItem';
import LibraryReducer from './reducer/LibraryReducer';

class FlatListView extends PureComponent {

    _keyExtractor = (item, index) => item.id;

    componentWillMount() {

    }

    _renderItem = ({ item }) => {
        <FlatListItem
            id={item.id}
            title={item.name}
            selected={true}
            onPressItem={this.onPressItemCell}
        />
    };

    onPressItemCell = (title) => {
        //alert("Selected value:" + String(id));
        //const {navigate} = this.props.navigation;
        //navigate('DetailView', {name: title})
    }

    render() {
        const {records} = this.props;
        console.log(records);
        return (
            <FlatList
                // contentContainerStyle = {{backgroundColor:'lightGrey', flex: 1}}
                data={records}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                    <FlatListItem
                        id={item.id}
                        title={item.name}
                        selected={true}
                        onPressItem={this.onPressItemCell}
                    />
                )}
            />
        )
    }

}

const styles = {
    viewStyle: {
        color: '#F0F0F0',
        backgroundColor:"gray",
        flex: 1
    }
};
export default FlatListView;