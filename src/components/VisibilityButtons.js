import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import allActions from '../actions';

const VisibilityButtons = () => {
  //   const dispatch = useDispatch();
  //   const todos = useSelector((state) => state.todos);

  return (
    <View
      style={{
        marginTop: 20,
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 1,
      }}>
      <Text style={{marginBottom: 10}}>Filter todos:</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 10,
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <Text style={{textAlign: 'center'}}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            marginHorizontal: 10,
            padding: 10,
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <Text style={{textAlign: 'center'}}>Uncompleted</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 10,
            borderColor: 'red',
            borderStyle: 'solid',
            borderWidth: 1,
          }}>
          <Text style={{textAlign: 'center'}}>Completed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default connect()(VisibilityButtons);
