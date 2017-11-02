import * as React from 'react';

interface InputProps{
    item: any
};
interface InputState{};

export default class InputView extends React.Component<InputProps, InputState>{
    constructor(props: InputProps){
        super(props);
    }

    render() {
        const { item } = this.props;
        return(
            <div className="upload-item">
                <label>{item.item_name}:</label>
                <input name={item.name} type="text" placeholder={item.placeholder} />
            </div>
        )
    }
}