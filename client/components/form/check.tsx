import * as React from 'react';

interface CheckProps{
    item: any
};
interface CheckState{};

export default class InputView extends React.Component<CheckProps, CheckState>{
    constructor(props: CheckProps){
        super(props);
    }

    render() {
        const { item } = this.props;
        return(
            <div className="upload-item">
                <label>{item.item_name}:</label>
                <div className="check-div">
                {
                    item.options.map((option, index) => {
                        return (
                            <label key={option} className={`${index==0?"active":""}`}>
                                <input type="radio" name={item.name} data-index={index} checked={index==0?true:false} />
                                {option}
                            </label>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}