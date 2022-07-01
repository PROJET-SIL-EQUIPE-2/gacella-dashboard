import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllPosts} from "../../redux/actions/actions";
import {Button, Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import PostCompounent from "./Compounents/Post.Compounent";
import Loader from "react-loader-spinner";
import {Link} from "react-router-dom";
import {history} from "../../index";
import AddPostDialogCompounent from "./Compounents/AddPostDialog.Compounent";
import "./styles.css";

const Posts=(props)=>{
    return props.posts.map((post , index)=>{
            return (
                <PostCompounent title={post.title} body={post.body} />
            );
    })
}

const HomeRoute=(props)=>{
    // executed when the compounent is mounted.
    // get teh data from reducers ( MODAL )
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const [isAddPostDialogOpen, setOpenDialogStatus] = useState(false);

    return (
        <React.Fragment>
            <h3>Home Page</h3>
            <div>
                <Button variant="contained" onClick={()=>setOpenDialogStatus(true)} >
                   Add new Post
                </Button>
            </div>
            <div>
                <Link to={"/contact"} >GOTO CONTACT PAGE( Link )</Link>
            </div>

            <div  className="main-beige"> Text with the main color </div>
            {
                posts.loading ? (
                    <Typography align="center">
                        <Loader
                            type="Rings"
                            color="yellow"
                            height={400}
                            width={400}
                        />
                    </Typography>
                ) : posts.error ? (
                    <Typography variant="h2" color="var(--main-red)" align="center">
                        <Loader
                            type="Rings"
                            color="var(--main-red)"
                            height={400}
                            width={400}
                        />
                        { posts.error}
                    </Typography>
                ):(
                    <div className="d-flex flex-wrap mt-5 mb-5 mt-lg-0  mb-lg-0 justify-content-center">
                        <Posts posts={posts.data}/>
                    </div>
                )
            }
            <AddPostDialogCompounent isOpen={isAddPostDialogOpen} handleClose={()=>setOpenDialogStatus(false)} />
        </React.Fragment>
    )

}

export default HomeRoute;
