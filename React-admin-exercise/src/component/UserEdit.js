import React from 'react'
import {Create,SimpleForm,TextInput, Edit} from 'react-admin'

export const UserEdit = (porps) => {
    return (
        <Edit title = 'Edit a User' {...porps}>
            <SimpleForm>
                <TextInput disabled source = 'id'/>
                <TextInput source='name'/>
                <TextInput  source='email'/>     
            </SimpleForm> 
        </Edit>
    )
}
