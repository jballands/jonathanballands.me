//
//  jonathanballands.me
//  Blog/index.js
//
//  © 2017 Jonathan Ballands
//

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import MasonryLayout from 'components/MasonryLayout';
import MasonryLink from 'components/MasonryLink';

import { BlogConfig } from 'helpers/blog';

import './Blog.scss';

export default class Blog extends React.Component {

    render() {
        const { match } = this.props;

        return (
            <div className="blog-container">
                <Route exact path={match.url}>
                    <MasonryLayout>
                        {Object.keys(BlogConfig).map((uri, i) => {
                            const entry = BlogConfig[uri];
                            return (
                                <MasonryLink
                                    key={`masonry-layout-item-${i}`}
                                    uri={`${this.props.match.path}/${uri}`}
                                    {...entry}
                                />
                            );
                        })}
                    </MasonryLayout>
                </Route>
            </div>
        );
    }

}