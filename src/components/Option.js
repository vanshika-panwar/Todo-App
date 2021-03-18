import React from 'react';
export default class Option extends React.Component {
  state = {
    createdAt: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(Date.now()),
    checked:false,
    completed:[]
  };
  // handleSelect=()=>{
  //   this.setState(() => ({
  //     completed:  prevState.completed.concat(this.props.count)
  //     }));
     
  // }
  // handleChange(e)
  // {
  //   const check = e.target.checked;
  //   if(check)
  //   {
  //     console.log(check)
      
  //   }
  //   // console.log(this.state.completed)
    
  // }
 render() {
    return (
      
        <div className="option">
          {<input type="checkbox" onChange={(e) => {
            this.props.handleCompletedOptions(this.props.optionText);
            
          }}/>}
          <p className="option__text">{this.props.count}.{this.props.optionText}</p>
          {this.state.createdAt}
          <button
            className="button button--link"
            onClick={(e) => {
              this.props.handleDeleteOption(this.props.optionText);
              
            }}
          >
            clear
            </button>
            
        </div>
      
    )
  }
}

