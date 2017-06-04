//
//  jonathanballands.me
//  Blog/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Masonry from 'react-masonry-component';

import BlogSelector from 'containers/BlogSelector';
import BlogEntry from 'containers/BlogEntry';

import './Blog.scss';

export default class Blog extends React.Component {

    render() {
        const { match } = this.props;
        console.log('rendering blog');

        return (
            <div className="blog-container">
                <Route path={`${match.url}/rawr`} component={Dummy} />
                <Route exact path={match.url}>
                    <span>Welcome to the blog</span>
                </Route>
            </div>
        );
    }

}

class Dummy extends React.Component {

    render() {
        const { match } = this.props;

        console.log(match);

        return (
            <div>Rawr!</div>
        );
    }

}