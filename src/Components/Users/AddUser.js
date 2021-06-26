import React from 'react';
import Card from '../UI/Card';

import Button from '../UI/Button';

const AddUser = props => {
    return (
        <Card>
            <form>
                <label>User name?
                </label>
                <input />
                <label>User age?
                </label>
                <input />
                <Button title='Add User' />
            </form>
        </Card>
    )
}

export default AddUser;
