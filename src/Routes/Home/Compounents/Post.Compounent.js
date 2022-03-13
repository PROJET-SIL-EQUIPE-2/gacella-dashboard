import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";
import PostImage from "../../../assets/images/postImage.png";
import PropTypes from "prop-types";

function PostCompounent({title , body}){
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={PostImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

PostCompounent.propTypes={
    title : PropTypes.string.isRequired,
    body : PropTypes.string.isRequired
}

export default PostCompounent;
