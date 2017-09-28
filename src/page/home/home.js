import React, { Component } from 'react'
import Footer from '../../component/footer'
import Carousel from '../../lib/carousel'
import Ajax from '../../lib/config'
import '../home/home.less'

class DataCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allInvest: '',
            allUser: ''
        }
    }
    componentDidMount() {
        var _this = this;
        Ajax({
            key: 'indexCount',
            callback: function (data) {
                _this.setState({
                    allInvest: data.dealAmount,
                    allUser: data.tradeNum
                })
            }
        })
    }
    render() {
        return (
            <div data-wrap="layout" className="countContaier">
                <div data-item="col-6">累计投资：{this.state.allInvest}</div>
                <div data-item="col-6">累计注册：{this.state.allUser}</div>
            </div>
        )
    }
}

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        let _this = this;
        Ajax({
            key: "iconList",
            callback: function (data) {
                _this.setState({
                    list: data.banner_urls
                })
            }
        })
    }
    iconRender() {
        return this.state.list.map((item) => {
            return (
                <div data-item={"col-" + 12 / this.state.list.length} key={item.type} className="iconContainer">
                    <p><img src={item.pic_url} alt="" /></p>
                    <p>{item.title}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <div data-wrap="layout">
                {this.iconRender()}
            </div>
        )
    }
}

class Title extends Component {
    render() {
        return (
            <div className="listTitle">
                <div>{this.props.title}</div>
            </div>
        )
    }
}

class Progress extends Component {
    render() {
        return (
            <div className="progress">
                <div style={{width:this.props.width*100+'%'}}></div>
            </div>
        )
    }
}

class ListItem extends Component {
    render() {
        return (
            <div className="listItem">
                <p className="listItemTitle">
                    <span>{this.props.loan_title}</span>
                    <span>{this.props.loan_type}</span>
                </p>
                <div data-wrap="layout" className="listItemInfo">
                    <div data-item="col-4">
                        <b>{this.props.newYear_reat}</b>%
                    </div>
                    <div data-item="col-4">
                        <b>{this.props.loan_times}</b>个月
                    </div>
                    <div data-item="col-4">
                        <input type="button" value="已结束" className="buyStatue" />
                    </div>
                </div>
                <Progress width={this.props.progress}/>
                <p className="listItemFooter">
                    <span>{this.props.start_invest_money}元起投</span>
                    <span>/{this.props.describe}</span>
                    <span className="pullRight">{this.props.surplusInvestMoney}元/{this.props.haveMoney}元</span>
                </p>
            </div>
        )
    }
}

class FullList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        var _this = this;
        Ajax({
            key: 'indexList',
            callback: function (data) {
                _this.setState({
                    list: data.bids
                })
            }
        })
    }
    rendList() {
        return this.state.list.map((item) => {
            return (
                <ListItem 
                    loan_title={item.loan_title}
                    loan_type={item.loan_type}
                    newYear_reat={item.newYear_reat}
                    loan_times={item.loan_times}
                    start_invest_money={item.start_invest_money}
                    describe={item.describe}
                    surplusInvestMoney={item.surplusInvestMoney}
                    haveMoney={item.haveMoney}
                    progress={(item.haveMoney-item.surplusInvestMoney)/item.totalMoney}
                    key={item.borrowNum}
                />
            )
        })
    }
    render() {
        return (
            <div className="fullList">
                {this.rendList()}
            </div>
        )
    }
}

class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <DataCount />
                <Icon />
                <Title title="标的" />
                <FullList />
                <Footer />
            </div>
        )
    }
}

export default Home