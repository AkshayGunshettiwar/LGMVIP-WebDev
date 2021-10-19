import {React, useState} from 'react'
import './Main.css';
import loading from '../components/giphy1.gif'

const Main = () => {

    const[dataFetched, setDataFetched]=useState();
    const[user, setUser] =useState();
    const[buttonClicked, setButtonClicked] =useState();

    const users = async() =>{
        setButtonClicked(true);

        const response = await fetch("https://reqres.in/api/users?page=1");

        const Jsonresp=await response.json();

        setUser(Jsonresp.data);
        setInterval(()=>{
            setDataFetched(true);
        }, 4500);
    }
    return (
        <div>
            <nav>
                <p className="nav-logo">Zippy</p>
                <button className="nav-button" onClick={users}>Get Users</button>
            </nav>


            {
                buttonClicked? (
                    dataFetched? (
                  <div className="main-container">

                    {
                        user.map(({id, first_name, last_name, avatar, email }) => {
                    return(
                      
                      <div className="container">
                        <div className="card">
                            <div className='layer'></div>
                            <div className="content" key={id}>
                                <div className="box">
                                 <img src={avatar} className="imag" alt="image"></img>
                                </div>
                                
                                    <div className="data-box">
                                        <h3 className="name">{first_name} {last_name}</h3>
                                        <p>{email}</p>
                                    </div>
                            </div>
                            
                        </div>
                      </div>
                      
                    )})
            }
            
                  </div>
                    ):(
            
                  <div className="loading"><p> <img src={loading}/> </p></div>
                    )
                
                ):(
            
              <div><body></body></div> )
            }
        </div>
    )    
}

export default Main
