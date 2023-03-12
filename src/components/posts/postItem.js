import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPostById } from "../../store/utils/thunks_postItem";
const PostsComponent = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const post = useSelector((state) => state.postItem.post)
    useEffect(() => {
        dispatch(fetchPostById({id: params.id}))
    },[dispatch, params.id])
    const getDate = (date) => {
        const d = new Date(date)
        return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
    }
    return(
        <div className="item-id-container">
            <h3 style={{margin:'10px'}}>{post.title}</h3>
            <img src={`${post.imagexl}?${post.id}`}  width="100%" height="300px" style={{borderRadius:10}} alt='none'/>
            <div style={{paddingTop:'10px'}}><strong>Author: </strong>{post.author}</div>
            <div style={{paddingBottom:'10px'}}><strong>create date: </strong>{getDate(post.createdAt)}</div>
            <div dangerouslySetInnerHTML={{
                __html: post.content
            }}></div>
        </div>
    )
}

export default PostsComponent