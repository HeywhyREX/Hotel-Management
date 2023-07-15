import React from 'react'
import SectorOne from './setttTwo/sector1'

function Popup(props) {
    const [med, setmed] = React.useState({
        blog:'',
        body:'',
        author:''
    })

    const handleChange = (name,value) =>{
        setmed((prev)=>{
    return {
        ...prev,[name]:value
    }
        })
    }

    
    const [author, setauthor]=React.useState('')
    const[vax,setvax]=React.useState(false)
    
    function chamfe(){
        setvax(true)
    }
    function doom(){
        setvax(false)
        setmed({
            ...med,
             blog: '',
            body: '',
            author: ''
        })
    }
    console.log(med)
    return(
      
        <div className='container'>
            <div className='ret'>
                <div className='yummy'><h1>The Dojo Blog</h1></div>
                <div className='gig'><div><p>Home</p></div>
                    <div><p>New Blog</p></div>
                </div>
            </div >
            
            <div className='jude'>
                <h1 id='hei'>Add a new Blog</h1>
                <form>
                    <div className='tim'>
                        <label>Blog title:</label><br/>
                        <input
                            type='text'
                            value={med.blog}
                            name='blog'
                            onChange={(e) => {handleChange(e.target.name,e.target.value)}}
                        />

                    </div>
                    <div className='tim'>
                        <label>Blog body</label><br/>
                        <textarea
                            value={med.body}
                            name='body'
                            onChange={(e) =>{handleChange(e.target.name,e.target.value) }}
                        ></textarea>
                    </div>
                    <div className='tim'>
                        <label>Blog author</label><br/>
                        <select
                            value={med.author}
                            name='author'
                            onChange={(e)=>{handleChange(e.target.name, e.target.value) }}
                        >
                            <option>Maria</option>
                            <option>Raikage</option>
                            <option>Dasiloy</option>
                        </select>
                    </div>

                </form>
                <button className='juve' onClick={chamfe}>Submit</button>
            </div>
            <p>{med.blog}</p>
            
            <SectorOne
            vital={med.blog}
            trival={med.body}
            bobby={med.author}
            jaxy={vax}
            swift={doom}
            />

        </div>
    )

    
}
export default Popup
