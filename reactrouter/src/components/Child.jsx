import React, { memo } from "react";


const Child = ({
    text,
    randomNumber
}) => {

    console.log("Hi")
    return (
        <>
            <p>{text} - {randomNumber}</p>
        </>
    )
}

export default memo(Child)