import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class MyHello extends Component {
    // 2.プロパティ値を元に出力を生成
    render() {
        return(
            <div>こんにちは、{this.props.name}さん！({this.props.age}歳)</div>
        );
    }
}

// 1.型情報を宣言
MyHello.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
};

MyHello.defaultProps = {
    name: '昌文君',
    age: 33
};