// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: block;
  max-width: 900px;
  min-height: 500px;
  margin: 10px auto;
`;

export const TodosWrapper = styled.div`
  display: flex;
`;

export const ButtonsWrapper = styled.div`
  margin: 10px 0px;
  input {
    margin-left: 5px;
  }
`;

export const TodoWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  justify-content: space-between;
`;

export const Title = styled.p`
  display: flex;
  paddingleft: 100px;
  margin: 3px auto;
  color: grey;
`;

export const Todocontant = styled.div`
  display: flex;
  vertical-align: middle;
  ${props => props.isDone
    && `text-decoration: line-through;
    color: gray;`}
  font-size : 25px;
  padding-left: 30px;
`;

export const EditWrapper = styled.div`
  input [type="text"] {
    width: 70px;
  }
`;

export const FunctionWrapper = styled.div`
  display: flex;
  margin: auto 0px;
  padding: 5px;
  color: grey;
  input [type="button"] {
    width: 83px;
  }
`;
