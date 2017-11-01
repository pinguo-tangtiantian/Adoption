import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';


import Input from '../../components/input';

interface IAppProps{};
interface IAppState{};

if(module.hot) {
    module.hot.accept();
}


class App extends React.Component<IAppProps, IAppState>{
    constructor(props:IAppProps){
        super(props);
    }
    render(): JSX.Element{
        return(
            <Input />
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
