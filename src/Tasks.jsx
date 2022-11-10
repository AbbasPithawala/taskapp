import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function Tasks({Task, updateForwardStep, updateBackwardStep, index, length, deleteTask}) {


    const handleForwardTask = (e) => {
        updateForwardStep(e.target.dataset.name, index)
    }
    const handleBackwardTask = (e) => {
        updateBackwardStep(e.target.dataset.name, index)
        // console.log(e.target.dataset.name)
        // updateStep(e.target.dataset.name)
    }
const handleDeleteTask = (e)=>{
  deleteTask(e.target.dataset.name, index)
}

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {Task.name}
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {Task.id}
        </Typography>
    <Button onClick={handleDeleteTask} data-name={Task.name}><DeleteIcon /></Button> 
      </CardContent>
      <CardActions>        
      <Button size="small" >{index == 0 ? <></>:<ArrowBackIcon data-name={Task.name} onClick={handleBackwardTask}/>}</Button>
        <Button size="small" >{index == length-1 ? <></>:<ArrowForwardIcon data-name={Task.name} onClick={handleForwardTask}/>}</Button>
      </CardActions>
    </Card>
  );
}



// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

// // export default function BasicCard() {
// //   return (
// //     <Card sx={{ minWidth: 275 }}>
// //       <CardContent>
// //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
// //           Word of the Day
// //         </Typography>
// //         <Typography variant="h5" component="div">
// //           be{bull}nev{bull}o{bull}lent
// //         </Typography>
// //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
// //           adjective
// //         </Typography>
// //         <Typography variant="body2">
// //           well meaning and kindly.
// //           <br />
// //           {'"a benevolent smile"'}
// //         </Typography>
// //       </CardContent>
// //       <CardActions>
// //         <Button size="small">Learn More</Button>
// //       </CardActions>
// //     </Card>
// //   );
// // }