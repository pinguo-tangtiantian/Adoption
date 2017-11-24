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

    onMenuToggle = () =>{
        var menuOn = this.props.header.menuOn;
        if(menuOn){
            this.props.actions.updateMenuState("off");
        }else{
            this.props.actions.updateMenuState("on");
        }
    }


    render(): JSX.Element {
        const { isLogin, menuOn } = this.props.header;
        return (
            <div className="top-nav">
                <div className="menu-icon" onClick={this.onMenuToggle}></div>
                <div className={`menu-box ${menuOn ? "show" : "hide"}`}>
                    <div className="menu-mask" onClick={this.onMenuToggle}></div>
                    <div className="menu-list">
                        <div className="user-info">

                        </div>
                        {
                            this.state.menu.map((item) => {
                                return (
                                    <p className="menu-item" key={item.name} onClick={this.onMenuToggle}>
                                        <NavLink to={item.route} >{item.name}</NavLink>
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="slogan">Take me home</div>
                {
                    isLogin ?
                        <div className="user-avator">Tritty</div> :
                        <div className="user-avator">
                            <NavLink to="/login"className="user-icon">
                            </NavLink>
                        </div>
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