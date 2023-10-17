import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./createPost.css"
import Footer from "../HomePage/Footer";
import axios from "axios";


const CreatePost = () => {
    const [formData, setFormData] = useState({
        headline: "",
        description: "",
        body: "",
        tag: "news"
    })

    const [countInput, setCountInput] = useState(0)
    const [validationError, setValidationError] = useState("")
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })

        if (name == 'description') {
            setCountInput(value.length)
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);

        axios.post("https://divine-treasue-school.onrender.com/api/v1/posts", formData)
            .then(response => {
                alert(response.data.message)
                setIsPending(false)
                navigate("/News")
            })

            .catch(error => {
                console.log(error)
                setValidationError({ ...error.response.data.error })
                setIsPending(false)
            })

    }

    return (
        <div className="create-post">

            <form onSubmit={handleSubmit}>
                <label>Headline:</label>
                <input type="text"
                    required
                    name='headline'
                    value={formData.headline}
                    onChange={handleChange}
                />
                {validationError.headline && <p className='validation-error'> {validationError.headline}</p>}

                <label> Short Description <span className="light-weight">(Optional)</span>: </label>
                <textarea
                    cols="30"
                    rows="10"
                    className="description"
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                <div className='description-validation'>
                    {validationError.description && <p className='validation-error'> {validationError.description}</p>}
                    {validationError.description && <p className='validation-error'>{countInput}/600</p>}
                </div>
                <label> Body: </label>
                <textarea
                    cols="30"
                    rows="10"
                    className="body"
                    name='body'
                    value={formData.body}
                    onChange={handleChange}
                ></textarea>

                <label> Tag:</label>
                <select
                    name='tag'
                    value={formData.tag}
                    onChange={handleChange}
                >
                    <option value="news">News</option>
                    <option value="article">Article</option>
                </select>
                {!isPending && <button>Post</button>}
                {isPending && <button disabled>Posting...</button>
                }
            </form>
            <Footer />
        </div >
    );
}

export default CreatePost;