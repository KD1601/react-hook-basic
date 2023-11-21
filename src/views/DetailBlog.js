import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../customize/useFetch'
import './Blog.scss'

const DetailBlog = () => {
    let history = useHistory()
    let { id } = useParams()
    const { dataFetch, isLoading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const handleBack = () => {
        history.push('/blog')
    }
    return (
        <>
            <div>
                <span onClick={() => handleBack()}>&lt;-- Back </span>
            </div>
            <div className='blog-detail'> <>
                <div className='title'>Blog ID: {id} --- {isLoading === true ? 'Loading data...' : dataFetch.title}</div>
                <div className='content'>{dataFetch.body}</div>
            </>
            </div>
        </>
    )
}

export default DetailBlog