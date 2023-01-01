import React from 'react'

function Card(props) {
    console.log(props.data.img)
    return (
        <div className='container'>
               <div className="item">
                     <div><img src={props.data.img} class="card-img-top" alt="..."  /></div>
                     <div className='pa'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus deleniti facilis error itaque maxime praesentium vel, illum quae numquam officiis nesciunt recusandae omnis, tempore id optio vero sunt debitis reprehenderit!</p></div>
               <button>click me</button>
               </div>
        </div>
    )
}

export default Card


           