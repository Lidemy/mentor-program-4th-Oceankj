/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-alert */
import React from 'react';
import {
  Backgroung,
  YellowBar,
  Wrapper,
  WrapperInside,
  Title,
  Brief,
  Star,
  BriefText,
  FooterWrapper,
  FooterText,
} from './Style.js';
import { Questions, SubmitWrapper } from './Template.js';

function App() {
  const [items, setItem] = React.useState([
    {
      name: 'name',
      titleName: '暱稱',
      content: '',
      isCompelete: false,
      isShow: false,
    },
    {
      name: 'email',
      titleName: '電子信箱',
      content: '',
      isCompelete: false,
      isShow: false,
    },
    {
      name: 'phone',
      titleName: '手機號碼',
      content: '',
      isCompelete: false,
      isShow: false,
    },
    {
      name: 'type',
      titleName: '報名類型',
      content: '',
      isCompelete: false,
      isShow: false,
    },
    {
      name: 'howToKnow',
      titleName: '怎麼知道這個活動',
      content: '',
      isCompelete: false,
      isShow: false,
    },
    {
      name: 'other',
      titleName: '其他',
      content: '',
      isCompelete: true,
      isShow: false,
    },
  ]);

  function handleInput(e, name) {
    setItem(
      items.map((item) => {
        if (item.name !== name) return item;
        return {
          ...item,
          content: e.target.value,
        };
      }),
    );
  }

  function handleCompelete(name) {
    setItem(
      items.map((item) => {
        if (item.name !== name) {
          return item;
        }
        if (item.content) {
          return {
            ...item,
            isCompelete: true,
          };
        }
        return {
          ...item,
          isCompelete: false,
          isShow: true,
        };
      }),
    );
  }

  function handleVertify(event) {
    event.preventDefault();

    const result = [];

    items.map(item => !item.isCompelete && result.push(item.titleName));

    if (result.length > 0) {
      setItem(
        items.map(item => ({
          ...item,
          isShow: true,
        })),
      );
      alert(`${result},尚未完成`);
    } else {
      alert('恭喜完成');
    }
  }

  return (
    <Backgroung>
      <Wrapper>
        <YellowBar />
        <WrapperInside>
          <Title>新拖延運動報名表單</Title>
          <Brief>
            <BriefText>
              活動日期：2020/12/10 ~ 2020/12/11
              <br />
              活動地點：台北市大安區新生南路二段1號
            </BriefText>
            <Star>*必填</Star>
          </Brief>
          <form onSubmit={handleVertify}>
            <Questions
              handleInput={handleInput}
              handleCompelete={handleCompelete}
              items={items}
            />
            <SubmitWrapper />
            <p>請勿透過表單送出您的密碼。</p>
          </form>
        </WrapperInside>
      </Wrapper>
      <FooterWrapper>
        <FooterText>© 2020 © Copyright. All rights Reserved.</FooterText>
      </FooterWrapper>
    </Backgroung>
  );
}

function Form() {
  return <App />;
}

export default Form;
