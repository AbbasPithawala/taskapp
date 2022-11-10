import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Tasks({ Task, updateForwardStep, updateBackwardStep, index, length, deleteTask }) {


  const handleForwardTask = (e) => {
    updateForwardStep(e.target.dataset.name, index)
  }
  const handleBackwardTask = (e) => {
    updateBackwardStep(e.target.dataset.name, index)
  }
  const handleDeleteTask = (e) => {
    deleteTask(e.target.dataset.name, index)
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {Task.name}
        </Typography>
        <Button onClick={handleDeleteTask} data-name={Task.name}>
          Delete
          <i  onClick={handleDeleteTask} data-name={Task.name} class="fa-solid fa-trash"></i>
          </Button>
      </CardContent>
      <CardActions>
        <Button className='back_arrow' size="small" data-name={Task.name} onClick={handleBackwardTask}>{index == 0 ? <></> : <ArrowBackIcon data-name={Task.name} onClick={handleBackwardTask} />}</Button>
        <Button className='next_arrow' size="small" data-name={Task.name} onClick={handleForwardTask}>{index == length - 1 ? <></> : <ArrowForwardIcon data-name={Task.name} onClick={handleForwardTask} />}</Button>
      </CardActions>
    </Card>
  );
}