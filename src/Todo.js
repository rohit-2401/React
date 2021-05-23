
import { React,useState } from 'react';
import {  Button,List, ListItem, ListItemText, Modal } from '@material-ui/core';
import './Todo.css';
//import timestamp from './App';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
//import { SettingsPowerRounded } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';
//import classes from '*.module.css';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));
  
function Todo(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();

    const handleOpen = () => {
        setOpen(true);
    };
    
    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input   
        },{ merge: true});

        setOpen(false);
    }

    return (
        <>
        <Modal
            open ={open}
            onClose={e => setOpen(false)}
        >
            <div className={ classes.paper }>
                <h1>I AM A MODAL</h1>
                <input placeholder = {props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={ updateTodo }>UPDATE</Button>
            </div>
        </Modal>
        <List className="todo__list">
           <ListItem>
              <ListItemText primary=  {props.todo.todo}  secondary="Date and time will be shown soon !"/>
            </ListItem>
            <EditIcon onClick={e => setOpen(true)}>Edit</EditIcon>
            <DeleteIcon onClick ={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE ME</DeleteIcon>            
        </List>
        </>
    )
}

export default Todo
