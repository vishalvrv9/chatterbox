import React from 'react'

class Chat extends React.Component{
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


                </div>
              </div>
              <div className="card-footer">
                <input type="text" placeholder="Username" className="form-control" /> <br/>
                <input type="text" placeholder="Your Message" className="form-control" /> <br/>
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
