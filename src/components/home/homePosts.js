import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../store/utils/thunks_posts'
import { Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const HomePosts = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state)
    let display_posts = posts.posts.articles.items
    let loading = posts.posts.loading
    let page = posts.posts.articles.page
    let end = posts.posts.articles.end
    useEffect(() => {
        if(display_posts.length === 0) {
            dispatch(fetchPosts({ page: 1, order: "desc", limit: 10 }))
        }
    }, [dispatch, display_posts.length])
    const getDate = (date) => {
        const d = new Date(date)
        return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
    }
    return (
        <div>
            {loading === true ? <div style={{textAlign:'center'}}>
                <Spinner animation='border' role="status">
                    <span className='visually-hidden'>Loading...</span>
                </Spinner></div> : null}
            <div className="post-container">
                {display_posts.length > 0 ? display_posts.map(item => {
                    return (
                        <div key={item.id} className="post-item-container">
                            <img src={`${item.imagexl}?${item.id}`} width='200px' height='200px' className='item-image' alt='none'/>
                            <div style={{color:'maroon', padding:'5px'}}>Author:- {item.author}</div>
                            <div><strong>{item.title}</strong></div>
                            <p>{item.excerpt}</p>
                            <div>create date: {getDate(item.createdAt)}</div>
                            <Link to={`/article/${item.id}`} style={{textDecoration:'none'}}>Read more</Link>
                        </div>
                    )
                }) : null}
            </div>
            {end !== 0 ? <button onClick={() => dispatch(fetchPosts({ page: page+1, order: "asc", limit: 10 }))}>Load More Posts</button> : null}
        </div>
    )
}

export default HomePosts