import React, {useState} from 'react';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';

const AddUser = props => {

    const [addUserName, setAddUserName] = useState('');
    const [addUserAge, setAddUserAge] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (addUserName.trim().length < 1 || addUserAge.trim().length < 1 || +addUserAge < -1) {
            return
        }      
        console.log(addUserName.trim(), +addUserAge)
        props.onAddUser(addUserName, addUserAge);
        setAddUserName('');
        setAddUserAge('');
    }
   
    const userNameChangeHandler = event => {
        setAddUserName(event.target.value);
    }

    const userAgeChangeHandler = event => {
        setAddUserAge(event.target.value);
    }

    return (
        <div>
            <ErrorModal
                title='An error occurred'
                message='Something went wrong'></ErrorModal>
            <Card>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor='username'>User name?
                    </label>
                    <input id='username'
                    type='text'
                    onChange={userNameChangeHandler}
                    value={addUserName} />
                    <label htmlFor='userage'>User age?
                    </label>
                    <input id='userage'
                    type='number'
                    onChange={userAgeChangeHandler} 
                    value={addUserAge}/>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;
