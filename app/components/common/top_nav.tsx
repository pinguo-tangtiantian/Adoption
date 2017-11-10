import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { Action, bindActionCreators } from 'redux';

import * as actions from '../../actions/index';

interface NavProps {
    header: any,
    actions: any
};
interface NavState {
    menu: any
};


class Navigator extends React.Component<NavProps, NavState>{
    constructor(props: NavProps) {
        super(props);
        this.state = {
            menu: [
                { name: '引导页', route: "/guide" },
                { name: '首页', route: "/home" },
                { name: '猫猫列表', route: "/cat_list" },
                { name: '狗狗列表', route: "/dog_list" },
                { name: '个人中心', route: "/user_center" },
                { name: '登录', route: "/login" },
                { name: '上传', route: "/upload" },
            ]

        }
    }

    onLogIn = () => {
        this.props.actions.updateLogState("in");
    }

    onLogOut = () => {
        this.props.actions.updateLogState("out");
    }

    onMenuShow = () => {
        this.props.actions.updateMenuState("on");
    }

    onMenuHide = () => {
        this.props.actions.updateMenuState("off");
    }


    render(): JSX.Element {
        const { isLogin, menuOn } = this.props.header;
        return (
            <div className="top-nav">
                {
                    menuOn ?
                        <div className="menu-icon" onClick={this.onMenuHide}></div> :
                        <div className="menu-icon" onClick={this.onMenuShow}></div>
                }
                <ul role="nav" className={`menu-list ${menuOn ? "show" : "hide"}`}>
                    {
                        this.state.menu.map((item) => {
                            return (
                                <li className="menu-item" key={item.name} onClick={this.onMenuHide}>
                                    <NavLink to={item.route} >{item.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="slogan">Take me home</div>
                {
                    isLogin ?
                        <div className="user-avator">Tritty</div> :
                        <div className="user-avator">登录</div>
                }

            </div>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        header: state.reducers.changeHeaderState
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigator);