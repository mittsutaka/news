import React from 'react';
import styled from "@emotion/styled";

const Wrapper = styled.header({
    height:"auto",
    padding:"10px",
    backgroundColor:"#7089FF",
    fontSize:32,
    color:"#fff"
})

const Header = ()=>{
    return(
        <Wrapper>
            NEWS
        </Wrapper>
    )
}

export default Header;