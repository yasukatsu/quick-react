import React,{Component} from 'react';
import PropTypes from 'prop-types';

export class Member{}

export default class MyProp extends Component {
    render() {
        console.log(this.props);
        return <p>結果はコンソールを確認</p>;
    }
}

MyProp.propTypes = {
    // Member型のプロパティ
    prop1: PropTypes.instanceOf(Member),
};