import {useState,useEffect} from 'react'
import TimeRang from './TimeRang'
import api from './TimeRangeApi'

const TimeTable = () => {

    const [timesAvailble, setTimesAvailble] = useState()

    useEffect(() => {


       setTimesAvailble(api)
       
    }, [])


    return (
        <div >
            {timesAvailble
            ?
                timesAvailble.map(item => <TimeRang range={item.range} id={item.id} />)
            :
            <h3>No times available</h3>
        }
        </div>
    )
}

export default TimeTable
