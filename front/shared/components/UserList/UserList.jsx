import React from 'react'
import {View, FlatList} from 'react-native'
import UserCard from './UserCard'

const UserList = ({users, navigation}) => {
   
    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={item => item? item._id : Math.random().toString()}
                renderItem={user => <UserCard navigation={navigation}user={user.item}/>}
            />
        </View>
    )
}

export default UserList
