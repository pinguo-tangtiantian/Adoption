import * as React from 'react';

interface InputProps{
    item: any,
    onSelectToggle: any
};
interface InputState{};

export default class Input extends React.Component<InputProps, InputState>{
    constructor(props: InputProps){
        super(props);
    }

    onInputFocus = (e) => {
        this.props.onSelectToggle(e);
    }

    render() {
        const { item } = this.props;
        return(
            <div className="upload-item">
                <label>{item.item_name}:</label>
                <input name={item.name} onFocus={this.onInputFocus} type="text" placeholder={item.placeholder} />
            </div>
        )
    }
}