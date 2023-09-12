/* eslint-disable react/prop-types */


const ColorButton = ({ color, handleClick }) => {
    const customStyle = () => {
        if (color === "black") {
            return {
                backgroundColor: color,
                color: "white"
            }
        } if (color === "white") {
            return {
                backgroundColor: color,
                border: "1px solid black"
            }
        }
        else {
            return {
                backgroundColor: color,
            }
        }
    }
    return (
        <button
            style={customStyle()}
            onClick={handleClick}
            className='py-1 px-3 uppercase rounded-2xl text-sm text-black shadow-lg outline-none'>
            {color}
        </button>
    )
}

export default ColorButton