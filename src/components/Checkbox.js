import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 450px;
    width: 100%;
  
    @media screen and (max-width: 768px) {
        max-width: 300px;
    }
`;

const StyledCheckbox = styled.span`
    position: relative;
    display: inline-block;
    width: 58px;
    height: 58px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    background-color: ${({ checked }) => (checked ? '#326a4f' : '#84c3a5')};
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media screen and (max-width: 768px) {
        width: 28px;
        height: 30px;
    }
`;
const Imgbox = styled.img`
  @media screen and (max-width: 768px) {
    width: 15px;
  }
`

const CheckboxGroup = ({ count }) => {
    return (
        <Container>
            {Array.from({ length: 5 }, (_, index) => (
                <StyledCheckbox
                    key={index}
                    checked={index === count? true: false}
                >
                    <Imgbox src='./img/check.png' />
                </StyledCheckbox>
            ))}
        </Container>
    );
};

export default CheckboxGroup;