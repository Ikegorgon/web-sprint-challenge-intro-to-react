// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Character = (props) => {
    return (
        <p>{props.name}</p>
    )
}

export default Character;