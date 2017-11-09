import * as React from 'react';
import * as ReactDOM from 'react-dom';


interface HomeProps{};
interface HomeState{};

export class HomePage extends React.Component<HomeProps, HomeState>{
    render(): JSX.Element {
        return (
            <div className="content">
                <p>Welcome to home page!</p>
            </div>
        )
    }
}