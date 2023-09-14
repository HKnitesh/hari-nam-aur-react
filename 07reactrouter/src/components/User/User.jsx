import { useParams } from "react-router-dom"

const User = () => {
    const {id} = useParams()
    return (
        <div className='flex justify-center items-center min-h-[300px] text-3xl text-orange-600'>
            User : {id}
        </div>
    )
}

export default User