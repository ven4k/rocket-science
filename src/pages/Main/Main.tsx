import { FC } from "react";
import HotelFilter from "../../components/HotelFilter/HotelFilter";
import Hotels from "../../components/Hotels/Hotels";

const Main:FC = () => {
    return (
        <main>
            <HotelFilter />
            <Hotels />
        </main>
    )
}
export default Main;