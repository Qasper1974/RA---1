import React from 'react';
import Card from '../UI/Card'
import classes from '../Users/UserList.module.css';

const UserList = props => {
    return (
        <Card className={classes.users} >
            <ul className={classes.ul}>
                {props.listOfUsers.map(user => 
                    <li key={user.name}>{user.name}, {user.age} years old</li>
                )}
            </ul>
        </Card>
    )
}

export default UserList;