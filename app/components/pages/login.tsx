import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { SignUp, SignIn, FindPwd } from '../common/sign_form';

interface SignProps{
    signDisplay: any,
    actions: any
};
interface SignState{};

export default class SignPage extends React.Component<SignProps, SignState>{
    constructor(props: SignProps){
        super(props);
    }



    render(): JSX.Element {
        return (
            <div className="content">
                <SignIn />
                <SignUp />
                <FindPwd />
            </div>
        )
    }
}
/* function mapStateToProps(state: any) {
    return {
        signDisplay: state.reducers.changeHeaderState
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

console.log(typeof(mapStateToProps))
export default connect({
    mapStateToProps,
    mapDispatchToProps
})(SignPage); */