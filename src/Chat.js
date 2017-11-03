import React from 'react'

class Chat extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      username: '',
      message: '',
      messageList: []
    }
  }




  render(){
    return(
      <div className='container'>
        <div className = 'row'>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <div className="card-title"><u><b>Chat Messages</b></u></div>
                <hr/>
                <div className='messages'>
                {this.state.messageList.map((message) =>
                  {return(
                    <div> {message.author} : {message.message} </div>
                  )})
                }


                </div>
              </div>
              <div className="card-footer">
                <input type="text" placeholder="Username" className="form-control" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/> <br/>
                <input type="text" placeholder="Your Message" value={this.state.message} className="form-control" onChange={e => this.setState({message: e.target.value})}/> <br/>
                <button className="btn btn-primary form-control">Send Message </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Chat
