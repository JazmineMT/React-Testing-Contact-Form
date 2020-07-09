import React from 'react';
import { render , screen, fireEvent} from "@testing-library/react";
import ContactForm from '../components/ContactForm'

test('ContactFrom updates new info to the list', ()=>{
    render(<ContactForm/>);

    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)


    fireEvent.change(firstNameInput, {target: {value: 'Jazmine'}})
    fireEvent.change(lastNameInput, {target: {value: 'McGinnis'}})
    fireEvent.change(emailInput, {target: {value: 'jazmine@jazmine.com'}})
    fireEvent.change(messageInput, {target: {value: '*Texts goes'}})


    const submitButton = screen.getByTestId(/submit/i)
    fireEvent.click(submitButton)
    
    const newContact = screen.getByDisplayValue(/McGinnis/i)

})