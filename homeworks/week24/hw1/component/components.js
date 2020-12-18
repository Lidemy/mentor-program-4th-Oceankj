/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 100px;
  left: 0px;
  top: 0px;
  text-align: center;
  background-color: #45454561;
  color: #ffffff5c;
  font-size: 50px;
`;

export const ErrorMessage = styled.p`
  color: red;
  ${props => (props.errorMessage ? 'visiblity:visible;' : 'visiblity:hidden;')}
`;

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  max-width: 1000px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: white;
  border-bottom: 1px solid black;
`;

export const Nav = styled(Link)`
  & + & {
    margin-left: 10px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px;
`;

export const Title = styled.p`
  display: inline-flex;
  font-size: 30px;
  vertical-align: middle;
  margin: 0px 27px 0px 0px;
`;

export const ArticleWrapper = styled.div`
  display: block;
  margin: 70px auto;
  max-width: 1000px;
`;

export const ArticleTitle = styled.p`
  font-size: 25px;
`;

export const ArticleContent = styled.p`
  word-break: break-all;
  white-space: break-spaces;
`;

export const PostsContain = styled.div`
  display: block;
  margin: 60px auto;
  max-width: 1000px;
`;

export const PostContainer = styled(Link)`
  display: flex;
  padding: 0px 40px;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 5px;
  color: #555;
  text-decoration: none;
  :hover {
    background-color: #80808047;
  }
`;

export const PostTime = styled.p`
  display: flex;
`;

export const PostTitle = styled.p`
  display: inline-block;
  text-overflow: ellipsis;
  width: 690px;
  height: 24px;
  overflow: hidden;
  white-space: nowrap;
`;

export const PostHr = styled.div`
  display: flex;
  margin: auto;
  padding: 0px;
  border-bottom: 1px solid #8080801f;
  width: 918px;
`;

export const PageBar = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

export const EditButtonContainer = styled.div`
  text-align: center;
  margin: 10px 0px;
`;

export const PostEditButton = styled(Link)`
  margin: 30px;
  text-align: end;
  background: #efefef;
  border: 1px solid #767676;
  padding: 5px 10px;
  border-radius: 5px;
  color: #555;
  text-decoration: none;
  :hover {
    background-color: #80808047;
  }
`;

export const Page = styled.div`
  margin: 8px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: #8080808f;
    color: white;
  }
`;

export const LogInContent = styled.div`
  display: block;
  justify-item: space-between;
  margin-top: 100px;
`;

export const LogInTitle = styled.p`
  display: block;
  font-size: 30px;
  text-align: center;
`;

export const FormContent = styled.div`
  display: flex;
  text-align: center;
`;

export const Form = styled.form`
  margin: 0px auto;
  min-width: 400px;
`;

export const LogInButton = styled.button`
  margin-top: 30px;
`;

export const NewWrapper = styled.div`
  display: block;
  margin: 70px auto;
  max-width: 1000px;
`;

export const ArticleInputTitle = styled.input`
  width: 292px;
  height: 24px;
`;

export const NewArticleContent = styled.textarea`
  margin-top: 15px;
  resize: none;
`;

export const SubmitContent = styled.div`
  margin: 10px;
  text-align: end;
`;

export const Submit = styled.button`
  display: inline-block;
  padding: 5px 45px;
  & + & {
    margin-left: 10px;
  }
`;

export const RegisterContent = styled.div`
  display: block;
  justify-item: space-between;
  margin-top: 100px;
`;

export const Subtitle = styled.p`
  display: inline-block;
`;

export const RegisterFormContent = styled.div`
  display: flex;
  text-align: right;
`;

export const RegisterInput = styled.input`
  margin-right: 80px;
  margin-left: 20px;
`;
