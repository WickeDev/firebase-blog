import React, {Component} from "react";
import "views/styles/app.css";
import {postsActions} from "core/posts";
import {connect} from "react-redux";

class App extends Component {
    componentWillMount() {
        const {loadPost} = this.props;
        loadPost();
    }

    createPost = () => {
        const {createPost} = this.props;
        const title = this.titleInput.value;
        const content = this.contentInput.value;

        if ((title === '') && (content === '')) {
            alert('제목과 내용을 입력하세요');
        } else if (title === '') {
            alert('제목을 입력하세요');
        } else if (content === '') {
            alert('내용을 입력하세요');
        } else {
            const post = {
                author: 'author',
                title: title,
                content: content,
                createTime: Date.now().toString(),
            };
            createPost(post);
        }
    };

    deletePost = (key) => {
        console.log(key);
    };

    render() {
        const {posts} = this.props;
        const list = posts.get('list').map(post => {
            const date = new Date();
            const key = post.get('key');
            date.setSeconds(post.get('createTime'));
            const time = date.toString();

            return <article
                style={{
                    textAlign: 'left',
                    margin: '10px 10% 10px 10%',
                    padding: '10px',
                    outline: '1px dotted black'
                }}
                key={key}>
                <div>
                    title: {post.get('title')}<br/>
                    author: {post.get('author')}<br/>
                    createTime: {time}<br/>
                </div>
                <div
                    style={{
                        marginTop: '5px',
                        outline: '1px dotted black'
                    }}
                >
                    body: {post.get('content')}
                </div>
                <div
                    style={{
                        textAlign: 'right',
                        width: '100%',
                    }}>
                    <button onClick={() => {
                        this.deletePost(key);
                    }}>Delete Post
                    </button>
                </div>
            </article>;
        });

        console.log(list);

        return (
            <div className="App">
                <div>
                    <br/>
                    <div>
                        <input
                            ref={(input) => (this.titleInput = input)}
                            placeholder="title"
                            style={{
                                width: '80%'
                            }}
                        />
                    </div>
                    <br/>
                    <div>
                        <textarea
                            ref={(input) => (this.contentInput = input)}
                            placeholder="content"
                            cols="40"
                            type="text"
                            style={{
                                width: '80%',
                                height: '300px',
                            }}
                        />
                    </div>
                    <button onClick={this.createPost}>Create Post</button>
                </div>
                {list}
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
