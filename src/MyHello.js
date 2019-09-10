import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class MyHello extends Component {
    // 2.プロパティ値を元に出力を生成
    render() {
        return <div>こんにちは、{this.props.children}さん！</div>;
    }
}

// // 1.型情報を宣言
// MyHello.PropTypes = {
//     name: PropTypes.string.isRequired
// };