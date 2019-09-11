import React,{Component} from 'react';
import PropTypes from 'prop-types';

export class Member{}

export default class MyProp extends Component {
    render() {
        console.log(this.props);
        return 
    }
}

MyProp.propTypes = {
    // Member型のプロパティ
    prop1: PropTypes.instanceOf(Member),
    prop2: PropTypes.oneOf(['男', '女', '不明']),
    prop3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
};