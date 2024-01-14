import React from 'react';
import styled from "styled-components";

const ContainerWithColumn = styled.div`
    display: flex;
    max-width: 1200px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 180px;
    justify-content: space-between;
  
    @media screen and (max-width: 768px) {
        margin-bottom: 50px;
    }
`;

const Title = styled.div`
    width: 100%;
    font-family: 'Gasoek One';
    font-size: 60px;
    text-align: left;
    letter-spacing: 2px;
    color: #326a4f;
  
    @media screen and (max-width: 768px) {
      font-size: 20px;
    }
`;

const Description = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: -0.24px;
    text-align: left;
    color: #7d7d7d;
  
    @media screen and (max-width: 768px) {
      font-size: 13px;
    }
`;

const Imgbox = styled.img`
    max-width: 197px;
    min-height: 209px;
    height: 100%;
    width: 100%;
    margin-left: 50px;
  
    @media screen and (max-width: 768px) {
        max-width: 130px;
        min-height: 100px;
        margin-left: 10px;
    }
`

function BookList({index, book}) {
    return (
        <ContainerWithColumn>
            <div>
                <Title>{index}.{book.bookTitle}</Title>
                <Description>{book.count}명이 좋아해요</Description>
            </div>
            <Imgbox src={book.bookImageUrl}/>
        </ContainerWithColumn>
    );
}
  
export default BookList;