import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./Home.css";
import { useState, useEffect } from "react";
import Tasks from "./Tasks";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button'; 

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const taskArray = [
  [
    {
      id: 1,
      name: "Task",
    },
    {
      id: 2,
      name: "Task",
    },
    {
      id: 3,
      name: "Task",
    },
  ],
  [
    {
      id: 4,
      name: "Task",
    },
    {
      id: 5,
      name: "Task",
    },
  ],
  [
    {
      id: 6,
      name: "Task",
    },
  ],
  [
    {
      id: 7,
      name: "Task",
    },
    {
      id: 8,
      name: "Task",
    },
  ],
];





export default function Home() {

  const [taskArrayState, setTaskArrayState] = useState(taskArray)
  const [showGrid, setShowGrid] = useState(true)
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSearchInput = (e)=>{
    console.log(e.target.value)
    if(e.target.value.length > 0){
      setShowGrid(false)
    }else{
      setShowGrid(true)
    }
  }
  const handleUpdateForwardStep = (name, index)=>{
    for(let x in taskArrayState[index]){
      if(taskArrayState[index][x]['name'] == name){
        const task = taskArrayState[index][x]
        console.log(taskArrayState[index][x])
        taskArrayState[index].splice(x, 1)
        taskArrayState[index+1].push(task)
        setTaskArrayState([...taskArrayState])
      }
    }
  }

  const handleUpdateBackwardStep = (name, index)=>{
    for(let x in taskArrayState[index]){
      if(taskArrayState[index][x]['name'] == name){
        const task = taskArrayState[index][x]
        console.log(taskArrayState[index][x])
        taskArrayState[index].splice(x, 1)
        taskArrayState[index-1].push(task)
        setTaskArrayState([...taskArrayState])
      }
    }
  }

  const handleAddTask = ()=>{
    
    const taskArrayObject = []
    let index = 0
    for(let x of taskArrayState){
      for(let task of x){
        taskArrayObject.push(task)
        index = taskArrayObject.length
      }
    }
    const newTask = {
      id: index + 1,
      name: name
    }

    taskArrayState[0].push(newTask)
    setTaskArrayState([...taskArrayState])
    setOpen(false);
  }

  const handleDeleteTask = (name, index)=>{
    for(let x in taskArrayState[index]){
      if(taskArrayState[index][x]['name'] == name){
        console.log(taskArrayState[index][x])
        taskArrayState[index].splice(x, 1)
        setTaskArrayState([...taskArrayState])
      }
    }
  }

  console.log(name)
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            onChange = {handleSearchInput}
          />
        </Search>

        <Button onClick={handleClickOpen} style={{backgroundColor: "white", color: "black" }}><AddIcon/> Add Task</Button>
        <Box sx={{ flexGrow: 1 }} />
       
   
      </Toolbar>
    </AppBar>
  </Box>
   { 
   showGrid 
   ?

   <Box sx={{ flexGrow: 1 }} className="container-box">
      <Grid container spacing={5} className="GridContainer">
        {taskArrayState.map((section, index) => {
          
          
          const x = index + 1;
          return (
            <Grid key={index} item xs={3}>
              <Item className="GridItem">
                {" "}
                <strong>{"STEP " + x}</strong>{" "}
              </Item>
              {section.map((tasks) => {
                return (
                  <Item className="GridItem">
                    <Tasks 
                    Task={tasks} 
                    updateForwardStep = {handleUpdateForwardStep}
                    updateBackwardStep = {handleUpdateBackwardStep}
                    index={index}
                    length = {taskArrayState.length}
                    deleteTask={handleDeleteTask}
                    />
                  </Item>
                );
              })}
            </Grid>
          );
        })}
      </Grid>
    </Box>
    
  :
  <></>  
  }
  <Dialog open={open} onClose={handleClose}>
        <DialogTitle> ADD TASK</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="Task"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e)=>(setName(e.target.value))}

          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={handleAddTask}>Add Task</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}




