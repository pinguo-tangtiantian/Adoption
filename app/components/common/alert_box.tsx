import * as React from 'react';

interface AlertProps{
};
interface AlertState{};

export default class AlertBox extends React.Component<AlertProps, AlertState>{

    constructor(props: AlertProps){
        super(props);
    }

    render() {
        return(
            <div className="alert-view">
                <div className="alert-content">
                    
                </div>
            </div>
        )
    }
}