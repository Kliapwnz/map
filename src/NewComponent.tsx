type NewComponentPropsType = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}


export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <table>
            {props.topCars.map((el,id)=>{
                return(<tr key={id}>
                    <th>{el.manufacturer}</th>
                    <th>{el.model}</th>
                </tr>)
            })}

        </table>

    )
}