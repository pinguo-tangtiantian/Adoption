import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from '../common/form/input';
import Select from '../common/form/select';
import Check from '../common/form/check';

import * as actions from '../../actions';

interface IAppProps {
    actions: any
};
interface IAppState {
    photos: any[]
};

const formOptions: any[] = [
    {
        type: "input",
        item: { item_name: "名字", name: "name", placeholder: "请输入名字" }
    },
    {
        type: "select",
        item: { item_name: "品种", name: "breed", options: ["土猫（中华田园猫）", "暹罗猫", "苏格兰折耳猫", "英国短毛猫", "美国短毛猫", "缅因猫", "挪威森林猫", "波斯猫", "其他品种", "未知品种"] }
    },
    {
        type: "select",
        item: { item_name: "花色", name: "color", options: ["纯黄狸花", "纯黑狸花", "黄白相间", "灰白相间", "灰蓝色", "纯白", "纯黑", "黑白相间", "三花", "玳瑁"] }
    },
    {
        type: "select",
        item: { item_name: "性别", name: "gender", options: ["母", "公"] }
    },
    {
        type: "select",
        item: { item_name: "年龄", name: "age", options: ["1月及以下", "1-3月", "3-6月", "6月-1岁", "1-3岁", "3-6岁", "6-8岁", "8-10岁", "10岁以上"] }
    },
    {
        type: "input",
        item: { item_name: "性格", name: "nature", placeholder: "小家伙是怎样的性格？" }
    },
    {
        type: "check",
        item: { item_name: "疫苗", name: "vaccine", options: ["未接种", "已接种", "未知"] }
    },
    {
        type: "check",
        item: { item_name: "驱虫", name: "expelling", options: ["未驱虫", "已驱虫", "未知"] }
    },
    {
        type: "check",
        item: { item_name: "绝育", name: "neutering", options: ["未绝育", "已绝育", "未知"] }
    },
    {
        type: "check",
        item: { item_name: "押金", name: "deposit", options: ["不需要", "需要"] }
    },
    {
        type: "input",
        item: { item_name: "来源", name: "origin", placeholder: "小家伙从哪里来的？" }
    },
    {
        type: "input",
        item: { item_name: "备注", name: "remark", placeholder: "最多500字" }
    },
    {
        type: "image",
        item: { item_name: "照片", name: "photos", max: 6, min: 1 }
    },
]

class UploadPage extends React.Component<IAppProps, IAppState>{
    constructor(props: IAppProps) {
        super(props);
        this.state = {
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
        if (!input.files || !input.files[0]) {
            return;
        }

        if (input.files[0].size > (1024 * 1024 * 5)) {    //图片大于5m
            return;
        }
        
        const filename: string = input.files[0].name;
        let duplicateFlag: boolean = false;
        for(let i in photos){
            if(photos[i].name == filename){
                alert("重复啦");
                duplicateFlag = true;
                break;
            }
        }

        if(duplicateFlag){ return };

        const fileReader = new FileReader();
        fileReader.readAsDataURL(input.files[0]);
        fileReader.onload = (event) => {
            const baseCode: string = event.target.result;
            let photo: any = {
                name: filename,
                src: baseCode
            }
            let statePhotos = this.state.photos;
            statePhotos.push(photo)
            this.setState({
                photos: statePhotos
            })
        }
    }
    

    render(): JSX.Element {
        console.log(this.state.photos);
        return (
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
                                                <input type="file" name="photos" id="photos" className="upload-photo" onChange={this.onSelectPhoto} onClick={(event)=> {event.target.value = null}} />
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