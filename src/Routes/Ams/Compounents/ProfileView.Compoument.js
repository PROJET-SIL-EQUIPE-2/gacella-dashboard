import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./styles.css";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function ProfileView(props) {
  const iconcolor = { color: "#C9805C" };
  const labelstyle = {
    style: {
      marginTop: -20,
      marginLeft: -15,
      fontSize: 25,
      color: "#000",
    },
  };
  const inputProps = {
    style: {
      color: "#9E9E9E",
      backgroundColor: "white",
    },
  };
  return (
    <div className="ProfileCont">
      <Avatar
        variant="square"
        alt="Remy Sharp"
        // img source
        src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100, borderRadius: 7 }}
      />
      <label
        className={
          props.Userinfos.libre
            ? "etatAgent etatAgentL"
            : "etatAgent etatAgentO"
        }
      >
        {props.Userinfos.libre ? "libre" : "occupé"}
      </label>
      <div className="linePR">
        <TextField
          InputLabelProps={labelstyle}
          inputProps={inputProps}
          id="filled-read-only-input"
          label="Nom"
          defaultValue={props.Userinfos.name}
          variant="filled"
          fullWidth
        />

        <IconButton style={iconcolor} aria-label="delete">
          <EditOutlinedIcon />
        </IconButton>
      </div>
      <div className="linePR">
        <TextField
          InputLabelProps={labelstyle}
          inputProps={inputProps}
          id="filled-read-only-input"
          label="Prenom"
          defaultValue={props.Userinfos.family_name}
          variant="filled"
          fullWidth
        />

        <IconButton style={iconcolor} aria-label="delete">
          <EditOutlinedIcon />
        </IconButton>
      </div>
      <div className="linePR">
        <TextField
          InputLabelProps={labelstyle}
          inputProps={inputProps}
          id="filled-read-only-input"
          label="Adresse mail"
          defaultValue={props.Userinfos.email}
          variant="filled"
          fullWidth
        />

        <IconButton style={iconcolor} aria-label="delete">
          <EditOutlinedIcon />
        </IconButton>
      </div>
      <div className="linePR">
        <TextField
          InputLabelProps={labelstyle}
          inputProps={inputProps}
          id="filled-read-only-input"
          label="Numero De Telephone"
          defaultValue={props.Userinfos.phone_number}
          variant="filled"
          fullWidth
        />

        <IconButton style={iconcolor} aria-label="delete">
          <EditOutlinedIcon />
        </IconButton>
      </div>
      <div className="linePR">
        <TextField
          InputLabelProps={labelstyle}
          inputProps={inputProps}
          id="filled-read-only-input"
          label="Mot De Passe"
          defaultValue="entrez un nouveau mot de passe "
          variant="filled"
          fullWidth
        />

        <IconButton style={iconcolor} aria-label="delete">
          <EditOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}
