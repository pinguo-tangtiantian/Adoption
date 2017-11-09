import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { SignUp, SignIn } from '../common/sign_form';

interface SignProps{};
interface SignState{};

export class SignPage extends React.Component<SignProps, SignState>{
    render(): JSX.Element {
        return (
            <div className="content">
                <SignUp />
                <SignIn />
            </div>
        )
    }
}