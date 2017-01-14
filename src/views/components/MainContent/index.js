import * as React from 'react'
import * as styles from './styles.css'
import CardSection from '../CardSection'

class MainContent extends React.Component {

    dateFormat(date) {
        let dd = date.getDate();
        let mm = date.getMonth() + 1;
        const yyyy = date.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return yyyy + '/' + mm + '/' + dd;
    }


    contraction = (post) => {
        let content = post.get('content');

        content = content.replace(/#/gi, '');
        content = content.replace(/`/gi, '');
        content = content.replace(/\*/gi, '');
        content = content.replace(/-/gi, '');

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

            console.log(post.get('createTime'));

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
                            작성일: {this.dateFormat(date)}<br/>
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