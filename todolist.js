

function Particularlistitem(props)
{
  if(props.itemname==""||props.itemname==null)
    {
      return null;
    }
  else
    {
  return <div><li>{props.itemname}</li> 
  <input  type="button" value="Remove Task" name={props.itemname} onClick={props.remove}/>
  </div>;
    }
}


class Todolist extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={tasks:[],currenttask:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleremove = this.handleremove.bind(this);
    
  }
  handleremove(e)
  {
    alert(e.target.name);
    var currentlist=this.state.tasks;
    currentlist.splice( currentlist.indexOf(e.target.name), 1 );
    this.setState({tasks:currentlist});
    
  }
  handleSubmit(e)
  {
    var currentlist=this.state.tasks;
    currentlist.push(this.state.currenttask);
    this.setState({tasks:currentlist,currenttask:''});
  }
  handleChange(event) {
    this.setState({currenttask: event.target.value});
  }
  render()
  {
    const currentlist=this.state.tasks;
      return(
        <div>
        <ul>
        {currentlist.map((current)=>
                        <Particularlistitem itemname={current} remove={this.handleremove}/>
                        )}
      </ul>
         <form >
        <label>
          Tasks:
          
<textarea  value={this.state.currenttask} onChange={this.handleChange}/>
        </label>
        <input type="button" value="Submit" onClick={this.handleSubmit} />
      </form>
          </div>
    );    
  }
}
ReactDOM.render(
  <Todolist/>,
  document.getElementById('root')
);
