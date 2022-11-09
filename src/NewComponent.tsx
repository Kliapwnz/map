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
            {props.students.map((el) => {
                return (
                    <li key={el.id}><span>{el.name}</span><span> age: {el.age}</span></li>
                )
            })}
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}