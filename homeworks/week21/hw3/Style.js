/* eslint-disable import/no-unresolved */
import styled from 'styled-components';

export const Backgroung = styled.div`
  display: block;
  background-color: lightgray;
`;

export const YellowBar = styled.div`
  margin: 0px auto;
  height: 8px;
  max-width: 1000px;
  background-color: #fad312;
`;

export const Wrapper = styled.div`
  margin: 0px auto;
  padding: 100px;
`;

export const WrapperInside = styled.div`
  max-width: 1000px;
  box-sizing: border-box;
  margin: 0px auto;
  padding: 54px 0px 35px 39px;
  background-color: white;
`;

export const Title = styled.p`
  margin: 0px;
  font-size: 36px;
  font-weight: bold;
`;

export const Brief = styled.div`
  margin-top: 35px;
`;

export const BriefText = styled.p`
  font-size: 13px;
  color: black;
  line-height: 2.3em;
`;

export const Notice = styled.p`
  font-size: 15px;
  color: #e74149;
  ${props => (props.isShow ? 'display:block;' : 'display:none;')}
  ${props => (props.isCompelete ? 'visibility:hidden;' : 'visibility:visible;')}
`;

export const QuestionTitle = styled.p`
  display: inline-block;
  font-size: 20px;
`;

export const Star = styled.p`
  display: inline-block;
  margin-left: 5px;
  font-size: 15px;
  color: #e74149;
`;
export const Textarea = styled.textarea`
  width: 500px;
  height: 150px;
`;

export const FooterWrapper = styled.div`
  color: #999999;
  font-size: 13px;
  background-color: black;
  height: 49px;
`;

export const FooterText = styled.p`
  padding: 18px;
  margin: 0px auto;
  text-align: center;
`;

export const Submit = styled.input`
  padding: 13px 30px;
  border-radius: 3px;
  background-color: #fad312;
  border-color: initial;
  border-style: none;
`;
