import React, { useState, useRef } from "react";
import MUIRichTextEditor from "mui-rte";
import {
    Avatar,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Popover,
    TextField
} from "@material-ui/core";
import { ContentState, convertToRaw, EditorState } from "draft-js";
import { draftToMarkdown } from "markdown-draft-js";

import {
    createMuiTheme,
    MuiThemeProvider,
    makeStyles
} from "@material-ui/core/styles";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import {useLocation} from "react-router-dom";
import {history} from "../../../index";

const defaultTheme = createMuiTheme();
export let [valuer,setValue]=[0,0];
export const getvaluer = () =>{
    return valuer;
}
function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                width: "90%",
                marginTop: 30,
                marginLeft: 10,
                border: "1px solid grey",
                borderRadius: 4
            },
            editor: {
                display: "block",
                maxHeight: 252,
                padding: "0 13px",
                marginTop: 2,
                marginBottom: 15
            },
            container: {
                display: "flex",
                flexDirection: "column",
                margin: 0
            },
            toolbar: {
                display: "block",
                order: 2,
                position: "relative"
            },
            placeHolder: {
                position: "relative"
            },
            editorContainer: {
                padding: 13,
                margin: 0,
                fontSize: 13
            }
        }
    }
});

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        width: "100%",
        boxShadow: "0px 0px 6px #00000029",
        padding: 8,
        position: "relative"
    },
    editor: {
        display: "flex",
        alignItems: "flex-end",
        borderRadius: 6
    },
    action: {
        paddingBottom: 1,
        display: "flex",
        position: "absolute",
        right: 20,
        alignItems: "center"
    },
    commentButton: {
        fontSize: 12,
        height: "fit-content",
        padding: "7px 9px",
        marginLeft: 14
    },
    spanButton: {
        lineHeight: "normal"
    },
    avatar: {
        marginTop: 4,
        backgroundColor: "#cbcbcb",
        width: 35,
        height: 35
    },
    avatarAuto: {
        width: 27,
        height: 27,
        backgroundColor: "#cbcbcb",
        color: "white",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 1
    },
    primary: {
        lineHeight: "normal",
        fontSize: 12
    },
    cardTitle: {
        fontWeight: "bold",
        fontFamily: "Lato",
        fontSize: 12,
        color: "#2C2C2C",
        textAlign: "initial"
    },
    cardSubheader: {
        fontFamily: "Lato",
        fontSize: 11,
        color: "#6F6F6F",
        textAlign: "initial"
    },
    cardSubheader2: {
        fontSize: 10,
        color: "#6F6F6F",
        textAlign: "initial"
    }
}));

const MyHashTagDecorator = (props) => {
    return (
        <b
            style={{
                color: "#4359EC",
                fontSize: 13,
                display: "inline-block"
            }}
        >
            {props.children}
        </b>
    );
};

const Staff = ({ person }) => {
    const classes = useStyles();
    return (
        <>
            <ListItemAvatar style={{ minWidth: 35 }}>
                <Avatar className={classes.avatarAuto}>{person.initials}</Avatar>
            </ListItemAvatar>
            <ListItemText
                style={{ margin: 0 }}
                classes={{ primary: classes.primary }}
                primary={<span className={classes.cardTitle}>{person.name}</span>}
                secondary={
                    <span style={{ display: "flex", flexDirection: "column" }}>
            <span className={classes.cardSubheader}>{person.title}</span>
            <span className={classes.cardSubheader2}>{person.department}</span>
          </span>
                }
            />
        </>
    );
};

export function TextEditor(props) {
    let query = useQuery();
    const location = useLocation();

    const users = [
        {
            name: "Karla Lopez",
            initials: "KL",
            title: "FE",
            department: "Development"
        },
        {
            name: "Merry Nyugen",
            initials: "MN",
            title: "UX",
            department: "Design"
        },
        {
            name: "Erika Murato",
            initials: "EM",
            title: "PM",
            department: "Oparational"
        }
    ];

    const emptyContent = JSON.stringify(
        convertToRaw(EditorState.createEmpty().getCurrentContent())
    );

    const ref = useRef(null);

    const [tempEditor, setTempEditor] = useState(emptyContent);
    const [initial, setInitial] = useState(emptyContent);
    const [cursorPosition, setCursorPosition] = useState(0);
    const [comment, setComment] = useState("");

    const handleComment = (data) => {
        setInitial(data);
        setCursorPosition(data.getSelection().getAnchorOffset());

        let cmt = draftToMarkdown(convertToRaw(data.getCurrentContent()));
        setComment(cmt);
    };

    //// popover

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClickTag = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseTag = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "tag-user-popover" : undefined;

    const handleClickUser = (name) => {
        const prev = initial;
        handleCloseTag();
        const prevText = draftToMarkdown(convertToRaw(prev.getCurrentContent()));
        const arrayText1 = prevText.slice(0, cursorPosition);
        const arrayText2 = prevText.slice(cursorPosition);

        const newText = arrayText1 + "@" + name.replace(" ", "") + arrayText2;

        const newContent = ContentState.createFromText(newText);

        const newEditor = EditorState.createWithContent(newContent);

        setInitial(newEditor);
        ref.current.focus();
        setTempEditor(JSON.stringify(convertToRaw(newContent)));
    };

    const save = (data) => {
        console.log(data);
    };

    const usersTag = users.map((user) => {
        const keys = user.name.split(" ");

        // add value as html
        // const stringHtml = `<em>@${user.name}</em>`;
        // const toHtml = convertFromHTML(stringHtml);
        // const state = ContentState.createFromBlockArray(
        //   toHtml.contentBlocks,
        //   toHtml.entityMap
        // );
        // const valueContent = JSON.stringify(convertToRaw(state));

        // add value as markdown
        // const markdownUser = `# @${user.name}`;
        // const mktodt = markdownToDraft(markdownUser);
        // const value2 = ContentState.createFromBlockArray(mktodt.contentBlocks, mktodt.entityMap);

        const userTag = {
            keys: keys,
            value: `@${user.name.replace(" ", "")}`,
            content: <Staff person={user} />
        };

        return userTag;
    });

    /// filter users
    const [filteredValue, setFilteredValue] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleFilterUsers = (text) => {
        setFilteredValue(text);
        let newFilter = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredUsers(newFilter);
    };

    const handleTagButton = (anchor) => {
        setAnchorEl(anchor);
    };
    [valuer, setValue] = useState('')

    const onEditorChange = event => {
        const plainText = event.getCurrentContent().getPlainText() // for plain text
        const rteContent = convertToRaw(event.getCurrentContent()) // for rte content with text formating
        rteContent && setValue(JSON.stringify(rteContent)) // store your rteContent to state
        props.fun(plainText);
    }
    return (
        <div>
            <MuiThemeProvider theme={defaultTheme}>
                <MUIRichTextEditor
                    label="Tapez votre réponse ..."
                    onSave={save}
                    defaultValue={tempEditor}
                    inlineToolbar={true}
                    ref={ref}
                    controls={[
                        "bold",
                        "italic",
                        "underline",
                        "bulletList",
                        "numberList",
                    ]}
                    onChange={onEditorChange}
                    customControls={[
                        {
                            name: "custom-tag",
                            icon: <AlternateEmailIcon />,
                            type: "callback",
                            onClick: (editorState, name, anchor) => {
                                handleTagButton(anchor);
                            }
                        }
                    ]}
                    autocomplete={{
                        strategies: [
                            {
                                items: usersTag,
                                triggerChar: "@"
                            }
                        ]
                    }}
                    decorators={[
                        {
                            component: MyHashTagDecorator,
                            regex: /\@[\w]+/g
                        }
                    ]}
                />
            </MuiThemeProvider>

            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleCloseTag}>
                <Card>
                    <CardContent>
                        <TextField
                            autoFocus
                            value={filteredValue}
                            onChange={(e) => handleFilterUsers(e.target.value)}
                            label="search by name"
                        />
                        <List>
                            {filteredUsers.map((user, index) => (
                                <ListItem
                                    key={index}
                                    onClick={() => handleClickUser(user.name)}
                                >
                                    <Staff person={user} />
                                </ListItem>
                            ))}
                        </List>
                    </CardContent>
                </Card>
            </Popover>
        </div>
    );
}
