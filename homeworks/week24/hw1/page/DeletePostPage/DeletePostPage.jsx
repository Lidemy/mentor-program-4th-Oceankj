/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser,
  deletePost,
  setStatus,
} from '../../redux/reducers/userReducer';
import { Loading, ErrorMessage, NewWrapper } from '../../component/components';
import { getAuthToken } from '../../util';

function DeletePostPage() {
  const { id } = useParams();
  const userStore = useSelector(selectUser);
  const deleteStatus = userStore.status;
  const { errorMessage } = userStore;
  const { isLoading } = userStore;
  const authToken = getAuthToken();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (!authToken || deleteStatus === 'ok') && history.push('/');
    dispatch(setStatus(''));
    dispatch(deletePost(authToken, id));
  }, [authToken, deleteStatus, history, dispatch, id]);

  return (
    <NewWrapper>
      {isLoading && <Loading>loading</Loading>}
      <div>
        <form>
          <ErrorMessage errorMessage={errorMessage}>
            {errorMessage}
          </ErrorMessage>
        </form>
      </div>
    </NewWrapper>
  );
}
export default DeletePostPage;
