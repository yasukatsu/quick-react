import React, {Component} from 'react';

import ico_new from './new.gif';

const style = {maxWidth: "35px", height: "auto"};

export default class MyNew extends Component {
    render() {
        return <img style={style} src={ico_new} />
    }
}