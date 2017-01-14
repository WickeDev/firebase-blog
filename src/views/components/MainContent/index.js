import * as React from 'react'
import * as styles from './styles.css'
import CardSection from '../CardSection'

class MainContent extends React.Component {


    contraction = (post) => {
        const content = post.get('content');

        if (content.length > 180) {
            return content.substring(0, 180) + '…….';
        }

        return content;
    };

    navigationToContent = (post) => {
        const {router} = this.props;
        const key = post.get('key');
        router.push(`content/${key}`);
    };

    contents = () => {
        const {posts} = this.props;

        return posts.get('list').map(post => {
            const date = new Date();
            const key = post.get('key');
            date.setSeconds(post.get('createTime'));
            const time = date.toString();

            return <div className={styles['content-box']} key={key}>
                <CardSection>
                    <article>
                        <div>
                            <h1>
                                <a onClick={() => this.navigationToContent(post)}>
                                    {post.get('title')}
                                </a>
                            </h1>
                            <br/>
                            작성일: {time}<br/>
                        </div>
                        <br/>
                        <div>
                            {this.contraction(post)}
                        </div>
                    </article>
                </CardSection>
            </div>
        });
    };

    render() {
        return (
            <div className={styles['contents']}>
                {this.contents()}
            </div>
        )
    }
}

export default MainContent;