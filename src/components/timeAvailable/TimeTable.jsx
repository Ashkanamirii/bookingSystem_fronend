import {useState,useEffect} from 'react'
import TimeRang from './TimeRang'
import api from './TimeRangeApi'

const TimeTable = () => {

    const [timesAvailable, setTimesAvailable] = useState()

    useEffect(() => {
       setTimesAvailable(api)
       
    }, [])


    return (
        <div >
            {timesAvailable
            ?
                timesAvailable.map(item => <TimeRang range={item.range} id={item.id} />)
            :
            <h3>No times available</h3>
        }
        </div>
    )
}

export default TimeTable
