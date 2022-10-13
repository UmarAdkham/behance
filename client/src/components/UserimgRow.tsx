import React from 'react'

interface Props {
    _id: string,
    url: string,
}

function UserimgRow(props: Props) {
    console.log(1);

    return (
        <div>
            {/* <p>{props._id}</p> */}
            <img src={props.url} alt="404" width={200} height={200} />
            <button>Delit</button>
        </div>
    )
}

export default UserimgRow