import {observeAllCarsData, testWebSocket} from "../redux/actions/actions";

export const  observeUtilTest=(socket , dispatch)=>{
    socket.on("event://get-message", (msg) => {
        const payload = JSON.parse(msg);
        dispatch(testWebSocket(payload));
    })
}

// OBSERVE ALL THE CARS

export const  observeUtilAllCars=(socket , dispatch)=>{
    socket.on("fetch_cars_data" , (allCarsArr)=>{
        const payload= JSON.parse(allCarsArr)
        dispatch(observeAllCarsData(payload));
    })
}

// OBSERVE CAR DATA
export const observeUtilCarData=(socket , dispatch)=>{
    socket.on("fetch_car_data" , (allCarsArr)=>{
        const payload= JSON.parse(allCarsArr)
        dispatch(observeAllCarsData(payload));
    })
}


