import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

export default function Comments() {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        const url = "https://jsonplaceholder.typicode.com/comments";
        const response = await axios.get(url);
        setComments(response.data);
        setIsLoading(false);
        //console.log(response);
    };

    const handleClickDetails = (id) => {
        console.log("id ", id);
        const linkTo = `/details/${id}`;
        navigate(linkTo);
    }

    if (isLoading) {
        return <Loader />;
    }

    //console.log("return ", comments);
    return (
        <div>
            <h2>Comments</h2>
            {comments.map((comment) => {
                //console.log(comment);
                return (
                    <div
                        onClick={() => handleClickDetails(comment.id)}
                        key={comment.id}>
                        <h4>Id: {comment.id}</h4>
                        <p>{comment.name}</p>
                    </div>
                );
            })}
        </div>
    );
} 