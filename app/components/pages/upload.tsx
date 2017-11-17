import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from '../common/form/input';
import Select from '../common/form/select';
import Check from '../common/form/check';

import * as actions from '../../actions';

import formOptions from '../../data/animalFormOption';
interface IAppProps {
    actions: any
};
interface IAppState {
    inputFile: any[]
    photos: any[]
};

class UploadPage extends React.Component<IAppProps, IAppState>{
    constructor(props: IAppProps) {
        super(props);
        this.state = {
            inputFile: [0,],
            photos: []
        }
    }

    componentDidMount() {
    }

    onFormDataPost = (e) => {
        e.preventDefault();
        const dom: HTMLFormElement = document.getElementById("upload_form") as HTMLFormElement;
        const form: FormData = new FormData(dom);
        this.props.actions.fetchAnimalData(form);
    }

    onSelectPhoto = (e) => {
        const input: HTMLInputElement = e.target;
        const photos: any[] = this.state.photos;

        //照片不存在
        if (!input.files || !input.files[0]) {
            return;
        }

        //图片大于5m
        if (input.files[0].size > (1024 * 1024 * 5)) {
            return;
        }

        /* const tempPhotos: any[] = this.state.photos;
        for(let i in tempPhotos){
            if(input.files[0].name == tempPhotos[i].name){
                alert("重复");
                return;
            }
        } */
        
        let inputNum: any[] = this.state.inputFile;
        inputNum.push(input.files.length);
        this.setState({
            inputFile: inputNum
        });

        if(this.state.photos.length <= 6){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(input.files[0]);
            fileReader.onload = (event) => {
                const baseCode: string = event.target['result'];
                let photo: any = input.files[0];
                photo.src = baseCode;
                let statePhotos: any[] = this.state.photos;
                statePhotos.push(photo);
                this.setState({
                    photos: statePhotos
                });
            }
        }else{
            alert("最多只能上传6张图片，请重新选择。");
            return;
        }
    }
    

    render(): JSX.Element {
        return (
            <div className="content">
                <form className="upload_form" id="upload_form" encType="multipart/form-data" name="uoload_animal">
                    {
                        formOptions.map((formItem, index) => {
                            if (formItem.type == "input") {
                                return (
                                    <Input key={formItem.item.item_name} item={formItem.item} />
                                )
                            } else if (formItem.type == "select") {
                                return (
                                    <Select key={formItem.item.item_name} item={formItem.item} />
                                )
                            } else if (formItem.type == "check") {
                                return (
                                    <Check key={formItem.item.item_name} item={formItem.item} />
                                )
                            } else if (formItem.type == "image") {
                                return (
                                    <div className="">
                                        <label>高清美照</label>
                                        <div className="photos">
                                            <div className="btn-div">
                                                <p className="upload-tips">每次只能选择一张，最多上传6张</p>
                                                <div className="btn-box">
                                                    <span className="upload-img-btn">上传</span>
                                                    {
                                                        this.state.inputFile.map((input, index)=>{
                                                            return (
                                                                <input key={`photos${index}`} type="file" name="photos" multiple 
                                                                    className={`upload-photo ${index==this.state.inputFile.length-1?"":"hide"}`}
                                                                    onChange={this.onSelectPhoto} 
                                                                    onClick={(event)=> {event.target['value'] = null}} 
                                                                />
                                                            )
                                                        })
                                                    }
                                                    
                                                </div>
                                            </div>
                                            <ul className="photos-ul">
                                                {
                                                    this.state.photos.map((photo, index) => {
                                                        return (
                                                            <li key={`photo${index}`}>
                                                                <img className="photo_thumb" src={photo.src} />
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <input type="button" value="提交" className="btn" onClick={this.onFormDataPost} />
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(UploadPage);