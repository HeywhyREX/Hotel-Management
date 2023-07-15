import React from "react";
import root from "../data/root";
import FinalCard from "../MainPassed/FinalCard";
import Card from "../propsPassing/Card";
import Zavl from "../MainPassed/zavl";
import { Link } from "react-router-dom";

export default function SectorOne(props) {
    const zavl=[
        {url:'./jut.png'},
        {url:'./red.jpg'},
        {url:'./ask.jpg'}
]
const[deaf,setdeaf]=React.useState(0)
const genius=function(){
    const juffy=deaf===0
    const adam=juffy?zavl.length-1:deaf-1
    setdeaf(adam)
}
    const back = function () {
        const juffy = deaf ===zavl.length-1
        const adam = juffy ?0:deaf+1
        setdeaf(adam)
    }

   return(
    <div className='faught overflow-hidden'>
           <div className=" kratos block md:grid grid-cols-5">
               <div style={{backgroundImage: `url(${zavl[deaf].url})` }} className="jaft min-h-screen col-span-3 duration-200 rounded-none md:rounded-r-3xl">
                   <div className=" text-3xl md:text-4xl pl-1/2 font-extrabold md:pl-20 translate-x-10 pt-10 text-white "><h1>HOTEL MADISON</h1></div>
                   <div className="translate-x-10  md:pl-20 pt-36 lg:pt-60 ">
                       <div className=' text-5xl md:text-6xl font-bold text-white leading-tight'><h1>The most exquisite</h1>
                           <h1>hotel in the world</h1>
                       </div>
                       <div className="mt-10 font-semibold text-2xl text-white md:w-auto w-10/12 "><p>Here to give you on escape from the stress.</p></div>
                       <div className='crack'><h1 className="seat bg-blue-400 text-xl  border-black rounded-xl font-semibold w-fit p-5 justify-center items-center  cursor-pointer  mt-10">Book a room</h1></div>
                   </div>
                   <div className="flex justify-between w-1/2 m-auto mt-5">
                    <div className="hov" onClick={genius}><img src="./left.png"/></div>    
                     <div className="hov" onClick={back}><img src="./right.png"/></div>
                   </div>
               </div>

               <div className="col-span-2 ml-2 md:ml-10">
                   <div className="flex justify-between items-center mt-10 ml-10">
                       <div>
                           <img src="./icon.png"/>
                       </div>
                       <div className="flex justify-around w-3/5 font-semibold text-gray-700 pr-20 text-2xl mr-5 md:mr-20">
                            <div><Link to='/Seem' className="josh">Rooms</Link></div>
                           <div><Link to='/Home' className="josh">About</Link></div>
                           <div><Link to='/Contact' className='josh'>Contact</Link></div>
                       </div>
                   </div>
                   <div className="Manipulation">
                       <div className=" text-4xl font-medium mt-20 text-gray-800 ml-10"><h1>Comfort</h1></div>
                       <div className="flex justify-between mt-10 items-center ml-10">
                           <div className=" text-red-700 font-medium text-2xl"><h3>Hot Rooms</h3></div>
                           <div className="text-blue-400 flex justify-evenly mr-20 w-20 items-center">
                               <div><h3>See all</h3></div>
                               <div className="m"><img src="./zeus.png"/></div>
                            </div>
                       </div>
                       <div className="work flex items-center ">
                        <Zavl />
                       </div>
                   </div>
                   <div className="mt-20 text-2xl ml-10"><h2>Looking for?</h2></div>
                   <div className="w-9/12"><Card />
                   </div>
                  
               </div>
 </div>
    </div>
   
   )
}

