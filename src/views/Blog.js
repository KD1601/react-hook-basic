import useFetch from "../customize/useFetch"
import './Blog.scss'
import { Link, useHistory } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react'
import AddNewBlog from "./AddNewBlog";
import _ from 'lodash'

const Blog = () => {

    const { dataFetch, isLoading } = useFetch('https://jsonplaceholder.typicode.com/posts')
    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (dataFetch && dataFetch.length > 0) {
            let dataBlog = dataFetch.slice(0, 9)
            setNewData(dataBlog)
        }
    }, [dataFetch])


    const handleAddNew = (blog) => {
        let data = newData
        data.unshift(blog)
        setShow(false)
        setNewData(data)
    }

    const deletePost = (id) => {
        let _newData = _.cloneDeep(newData)
        _newData = _newData.filter(item => item.id !== id)
        setNewData(_newData)
    }

    return (
        <>

            <Button variant="primary" className='my-3' onClick={handleShow}>
                Add new blog
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog handleAddNew={handleAddNew} />
                </Modal.Body>

            </Modal>

            <div className="blogs-container">
                {isLoading === false && newData && newData.length > 0
                    ? newData.map((item, index) => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title">
                                    <span>{item.title}</span>
                                    <span onClick={() => deletePost(item.id)}> X </span>
                                </div>
                                <div className="content">{item.body}</div>
                                <button>
                                    <Link to={`/blog/${item.id}`}>View detail</Link>
                                </button>
                            </div>

                        )
                    })
                    :
                    (
                        <div style={{ textAlign: 'center !important', width: '100%' }}> Loading data...</div>
                    )

                }
            </div >
        </>

    )

}

export default Blog


