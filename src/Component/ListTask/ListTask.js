import React from 'react'
import {useSelector} from 'react-redux';
import { Button ,InputGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {deleteTask ,doneTask} from '../../js/action/action';
import EditTask from '../../Component/edittask/edittask';




function ListTask() {
    const dispatch = useDispatch() 
    const Tasks = useSelector((state) => state.listtasks)
    return (
        <div style={{
          display: "flex",
           flexDirection:"row",
          justifyContent: "space-between",
          backgroundColor: "#20c997",
          maxWidth: "50%",
          padding: "10px",
          margin: "10px",
          borderRadius: "8px",
          marginLeft: "25%",
        }}>
           {Tasks.map((task,key)=>(
               <div className='body' key={key}>
                  <div >
              <h1 className='task'>{task.text}</h1> 
              </div>
              <div className='buttons'  style={{display: "flex",
              flexDirection:"row" , alignItems:"center" ,  justifyContent: "space-between",}}>

       <InputGroup.Append style={{ color: "white" }}>
      
      <EditTask style={{ color: "white" }}  task={task}/>
    </InputGroup.Append>
    <InputGroup.Append >
      <Button className='bdelet' variant="outline-secondary" style={{ color: "white" }}  onClick={()=>dispatch(deleteTask(task.id))} >Delete</Button>
    </InputGroup.Append>
    <InputGroup.Append>
      <Button variant="outline-secondary" style={{ color: "white" }} onClick={()=>dispatch(doneTask(task.id))} >{task.Done?'IsDone':'Undone'}</Button>
    </InputGroup.Append>
    </div>
    </div>))}
    </div>
     )

     
}

export default ListTask
