import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import '../../common/css/style.css';


import Input from '../../components/form/input';
import Select from '../../components/form/select';
import Check from '../../components/form/check';

interface IAppProps{};
interface IAppState{};

if(module.hot) {
    module.hot.accept();
}

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
]

class App extends React.Component<IAppProps, IAppState>{
    constructor(props:IAppProps){
        super(props);
    }

    render(): JSX.Element{
        return(
           <form className="upload_form" id="upload_form" encType="multipart/form-data">
               {
                formOptions.map((formItem, index)=>{
                    if(formItem.type == "input"){
                        return (
                            <Input key={formItem.item.item_name} item={formItem.item} />
                        )
                    }else if(formItem.type == "select"){
                        return (
                            <Select key={formItem.item.item_name} item={formItem.item} />
                        )
                    }else if(formItem.type == "check"){
                        return (
                            <Check key={formItem.item.item_name} item={formItem.item} />
                        )
                    }
                })
               }
               <input type="submit" value="提交" />
           </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
