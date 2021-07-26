import React from 'react'
import Clubs from './clubs'

const ListOfClubs = () => {
    const clubs=[
        {id:1, logo:"", name:"test"},
        {id:2, logo:"", name:"test1"},
        {id:3, logo:"", name:"test2"},
]

    return (

        <div>
            {clubs.map((item)=><Clubs id={item.id} name={item.name} logo={item.logo}/>)}
        </div>
    )
}

export default ListOfClubs
