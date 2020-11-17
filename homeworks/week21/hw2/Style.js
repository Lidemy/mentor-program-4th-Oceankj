/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

export const Backgroung = styled.div`
  display: flex;
  background-color: gainsboro;
`;

export const BoardWrapper = styled.div`
  display: flex;
`;

export const InformationWrapper = styled.div`
  display: flex;
  font-size: 50px;
  margin: 40px;
`;

export const VisualBoardWrapper = styled.div`
  display: block;
  position: absolute;
  top: 28px;
  left: 136px;
  width: min-content;
  height: min-content;
  padding: 1px;
  margin: 30px auto;
  border: 3px solid black;
`;

export const PiecesBoardWrapper = styled.div`
  display: block;
  position: relative;
  width: min-content;
  height: min-content;
  padding-top: 0.99px;
  margin: 31px 114px;
`;

export const Row = styled.div`
  display: flex;
  margin: 0px;
`;

export const Column = styled.div`
  display: inline-block;
  border: 1px solid black;
  height: 35px;
  width: 35px;
  margin: 0px;
`;

export const PiecesRow = styled.div`
  display: flex;
  margin: 0px;
`;

export const PiecesColumn = styled.p`
  margin: 0px;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 50%;
  height: 37px;
  width: 37px;
  color: #00000000;
  ${props => props.color === 'black' && 'border: 18.5px solid black; background: black;'}
  ${props => props.color === 'white' && 'border: 18.5px solid white; background: white;'}
`;
