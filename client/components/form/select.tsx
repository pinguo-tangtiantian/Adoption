import * as React from 'react';

interface SelectProps{
    item: any
};
interface SelectState{};

export default class SelectView extends React.Component<SelectProps, SelectState>{
    constructor(props: SelectProps){
        super(props);
    }

    render() {
        const { item } = this.props;
        return(
            <div className="upload-item">
                <label>{item.item_name}:</label>
                <select name={item.name} value={item.options[0].value}>
                    {
                        item.options.map(option =>{
                            return(
                                <option key={option} value={option}>{option}</option>
                            )
                        })
                    }
                </select>
            </div>
        )
    }
}