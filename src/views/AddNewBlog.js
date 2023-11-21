import { useState } from 'react'
import './Blog.scss'
import axios from 'axios'

const AddNewBlog = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const handleSubmitBtn = async () => {
        if (!title || !content) {
            alert('empty data input!')
            return
        }
        let data = {
            title: title,
            body: content,
            userId: 1,
        }

        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        if (res && res.data) {
            let newBlog = res.data
            props.handleAddNew(newBlog)
        }
    }

    return (
        <div className="add-new-container">
            <div className="title-add-new">-----Add new blog-----</div>
            <div className='input-blog-data'>
                <label>Title: </label>
                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className='input-blog-data'>
                <label>Content: </label>
                <input type='text' value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
            <button className='btn-add-new' onClick={() => handleSubmitBtn()}>Submit</button>
        </div>
    )
}

export default AddNewBlog