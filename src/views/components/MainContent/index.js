import * as React from 'react'
import moment from 'moment'

import {Button} from 'react-toolbox/lib/button'

import * as styles from './styles.css'
import CardSection from '../CardSection'


class MainContent extends React.Component {

    contraction = (post) => {
        let content = post.get('content')

        content = content.replace(/(#|)/gi, '')
        content = content.replace(/`/gi, '')
        content = content.replace(/\*/gi, '')
        content = content.replace(/-/gi, '')

        if (content.length > 255) {
            return content.substring(0, 255) + ' …….'
        }

        return content
    }

    loadMore = () => {
        const {loadMore} = this.props
        loadMore()
    }

    navigationToContent = (post) => {
        const {router} = this.props
        const key = post.get('key')
        router.push(`content/${key}`)
    }

    getTime = (post, key) => {
        const time = post.get(key)
        if ((time === null) || (time === undefined)) {
            return null
        }
        return moment(time).format('ll')
    }

    contents = () => {
        const {list} = this.props
        moment.locale('ko')

        console.log(list);

        return list.map(post => {
            const key = post.get('key')

            return <div className={styles['content']} key={key}>
                <CardSection>
                    <article>
                        <div>
                            <h1>
                                <a onClick={() => this.navigationToContent(post)}>
                                    {post.get('title')}
                                </a>
                            </h1>
                            <br/>
                            작성일: {this.getTime(post, 'createTime')}<br/>
                            업데이트: {this.getTime(post, 'updateTime')}
                        </div>
                        <br/>
                        <div>
                            {this.contraction(post)}
                        </div>
                    </article>
                </CardSection>
            </div>
        })
    }

    loadMoreButton = () => {
        return <Button
            onClick={::this.loadMore}
            raised
            label="이전 글"
        />
    }

    render() {
        const {hasHiddenPosts} = this.props
        return (
            <div className={styles['contents']}>
                {this.contents()}
                {hasHiddenPosts ? this.loadMoreButton() : null}
            </div>
        )
    }
}

export default MainContent