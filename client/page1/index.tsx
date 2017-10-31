import './index.css';


console.log("this is page 1.nananan");


interface IAppProps{};
interface IAppState{};

// if(module.hot) {
//     module.hot.accept();
// }

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Input from '../components/input';

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

ReactDOM.render(<App />, document);
