type NewComponentPropsType = {
    students: Array<StudentType>
}

type StudentType = {
    id: number
    name: string
    age: number
}


export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>

            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}