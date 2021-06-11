import React from 'react'
import {Create,SimpleForm,TextInput} from 'react-admin'

export const UserCreate = (porps) => {
    return (
        <Create title = 'Create a Post' {...porps}>
            <SimpleForm>
                <TextInput source='name'/>
                <TextInput source='email'/>
            </SimpleForm>
            
        </Create>
    )
}
