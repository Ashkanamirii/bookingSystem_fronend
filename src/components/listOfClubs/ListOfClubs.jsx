import React from 'react'
import ClubsContent from './clubsContent'

const ListOfClubs = () => {
    const clubs=[
        {id:1, logo:"https://picsum.photos/50", name:"test"},
        {id:2, logo:"https://picsum.photos/50", name:"test1"},
        {id:3, logo:"https://picsum.photos/50", name:"test2"},
        {id:4, logo:"https://picsum.photos/50", name:"test3"},
        {id:5, logo:"https://picsum.photos/50", name:"test4"},
        {id:6, logo:"https://picsum.photos/50", name:"test5"},
        {id:7, logo:"https://picsum.photos/50", name:"test6"},
]

    return (

        <div>
            {clubs.map((item)=><ClubsContent key={item.id} id={item.id} name={item.name} logo={item.logo}/>)}
        </div>
    )
}

export default ListOfClubs
