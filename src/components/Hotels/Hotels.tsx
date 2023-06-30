import { FC, useState } from "react"
import data from '../../hotels.json';


const Hotels:FC = () => {

    const [hotels, setHotels] = useState(data.hotels)

    return (
        <div>
            {hotels.map(el => (
                <div>{el.country}</div>
            ))}
        </div>
    )
}
export default Hotels