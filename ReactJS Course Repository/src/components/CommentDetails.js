import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

export default function CommentDetails () {
    const [commentDetails, setCommentDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(()=>{
        getCommentDetails();
    }, []);

    const getCommentDetails = async () => {
        //console.log("params ", params);
        const id = params.id;
        const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
        const response = await axios.get(url);
        setCommentDetails(response.data);
        setIsLoading(false);
        //console.log(response);
    };

    if(isLoading) {
        return (<Loader />);
    }
    
    //console.log("return ", commentDetails);
    return (
        <div>
            <h2>Comment details</h2>
            <p><b>Id:</b> {commentDetails.id}</p>
            <p><b>Name:</b> {commentDetails.name}</p>
            <p><b>Email:</b> {commentDetails.email}</p>
            <p><b>Body:</b> {commentDetails.body}</p>
        </div>
    );
}