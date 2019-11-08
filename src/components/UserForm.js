import React from './node_modules/react';
import Button from './node_modules/@material-ui/core/Button';
import FormUserDetails from './FormUserDetails'
import { Divider } from 'material-ui';


 function UserForm(){
     state = {
         firstName: '',
         lastName: '',
         email: '',
         address: '',
         username: ''
     }

// moving to next step
        nextStep = () => {
            const {step} this.state;
            this.setState({
                step: step + 1
            })
        }

        prevStep = () => {
            const {step} this.state;
            this.setState({
                step: step - 1
            })
        }

// handle field change
        handleChange = input => e => {
            this.setState({[input]: e.target.value});
        }

        render() {
            const { step } = this.state;
            const { firstName, lastName, email, address, username } = this.state;
            const values = { firstName, lastName, email, address, username }

            switch(step) {
                case 1:
                    return(
                        <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        />
                    )
                case 2:
                    return (<h1>FormPersonalDetails<h1/>)
                case 3:
                    return (<h1>Confirm</h1>)
                case 4:
                    return (<h1>Success</h1>)
            }

        return(
            <div>

            </div>
        )
    }
}

export default UserForm