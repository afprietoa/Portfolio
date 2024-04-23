import React from 'react'
import Wrapper from '../assets/wrappers/Chip'

const Chip = ({label}) => {
    return (
        <Wrapper>
        <p className="chip">
            {label}
        </p>
        </Wrapper>

    )
}
export default Chip
