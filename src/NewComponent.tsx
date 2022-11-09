type NewComponentPropsType = {
    topCars: Array<CarsType>
}

type CarsType = {
    manufacturer: string
    model: string
}


export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>1</div>

    )
}