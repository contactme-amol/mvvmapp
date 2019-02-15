import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class FlatListItem extends PureComponent {

    onPressFlatListItem() {
        this.props.onPressItem(this.props.title);
        //alert("onPressFlatListItem");
    }

    render() {
        //console.log("in item log");
        //alert("in item view");
        return (
            <TouchableOpacity onPress={this.onPressFlatListItem.bind(this)}>
                <View style={style.itemStyle}>
                    <Text>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

}

const style = {
    itemStyle: {
        padding: 16,
        backgroundColor: 'white',
    }

};

export default FlatListItem;