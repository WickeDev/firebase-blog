import * as React from "react";
import {connect} from "react-redux";

import {postsActions} from "core/posts";
import {PostForm} from 'views/components'

class Post extends React.Component {

    render() {
        return (
            <div>
                <PostForm {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = ({posts}) => ({
    posts,
});

const mapDispatchToProps = Object.assign(
    {},
    postsActions,
);

export default connect(mapStateToProps, mapDispatchToProps)(Post);
