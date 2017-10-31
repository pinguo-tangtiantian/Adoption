import * as React from 'react';

interface InputProps{};
interface InputState{};

export default class Input extends React.Component<InputProps, InputState>{
    render() {
        return(
            <input type="text" placeholder="请输入" />
        )
    }
}