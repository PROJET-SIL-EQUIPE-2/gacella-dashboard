import {ElectricCar, Thermostat} from "@mui/icons-material";
import {AssignmentInd, MyLocation, Speed} from "@material-ui/icons";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";


const CarsWindowInfo =({car})=>{
    // const car ={
    //     name : 'V-12D4',
    //     position : {
    //         lat : 48.8584,
    //         lng: 2.2945
    //     },
    //     speed : '75Km/h',
    //     heat : '35°C',
    //     AM : {
    //         fullName : 'Metidji Sid Ahmed',
    //         email : 'is_metidji@esi.dz'
    //     }
    //
    // }
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <div className="d-flex">
                <ListItem >
                    <ListItemAvatar>
                        <Avatar className="gacela-orange-bg">
                            <ElectricCar className="--gacela-orangeFA"/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={[<span className="roboto-700"> ID</span>]} secondary={ [<span className="lora-400"> {car.name}</span>]} />
                </ListItem>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar className="gacela-orange-bg">
                            <MyLocation className="--gacela-orangeFA"/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={[<span className="roboto-700"> Position</span>]} secondary={ [<span className="lora-400"> {car.position.lat} , {car.position.lng}`</span>]} />

                </ListItem>
            </div>
            <div className="d-flex">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="gacela-orange-bg">
                            <Speed className="--gacela-orangeFA"/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={[<span className="roboto-700"> Vitesse</span>]} secondary={ [<span className="lora-400"> {car.speed}</span>]} />

                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="gacela-orange-bg">
                            <Thermostat className="--gacela-orangeFA"/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={[<span className="roboto-700"> Température</span>]} secondary={ [<span className="lora-400"> {car.heat}</span>]} />

                </ListItem>
            </div>
            <div className="d-flex justify-content-center">
                <ListItem className="w-auto">
                    <ListItemAvatar>
                        <Avatar className="gacela-orange-bg">
                            <AssignmentInd className="--gacela-orangeFA"/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={[<span className="roboto-700"> AM</span>]} secondary={[<span className="lora-400">{car.AM.fullName}</span>, " , ",  <span className="lora-400">{car.AM.email}</span>]} />
                </ListItem>
            </div>

        </List>
    )
}

export default CarsWindowInfo;


// <div className="d-flex flex-column lora-500 ">
//     <div style={{justifyContent : "space-evenly"}} className="d-flex">
//         <div className="d-flex">
//             <ElectricCar/> <span>{car.name}</span>
//         </div>
//         <div className="d-flex">
//             <MyLocation/> <span>{car.position.lat} , {car.position.long}</span>
//         </div>
//     </div>
//     <div style={{justifyContent : "space-evenly"}} className="d-flex">
//         <div className="d-flex">
//             <Speed/>  <span>{car.speed}</span>
//         </div>
//         <div className="d-flex">
//             <Thermostat/> <span>{car.heat}</span>
//         </div>
//     </div>
//
//     <div className="d-flex">
//         <AssignmentInd/> <span>{car.AM.fullName}</span> <span> , {car.AM.email}</span>
//     </div>
//
// </div>
