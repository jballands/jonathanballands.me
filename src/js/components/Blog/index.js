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

        return (
            <div className="blog-container">
                <Route exact path={match.url} component={BlogSelector} />
            </div>
        );
    }

}