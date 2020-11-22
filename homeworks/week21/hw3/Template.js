/* eslint-disable import/extensions */
/* eslint-disable default-case */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {
  Notice, QuestionTitle, Star, Textarea, Submit,
} from './Style.js';

function QuestionTitleArea({ titleName, itemName }) {
  return (
    <div>
      <QuestionTitle>{titleName}</QuestionTitle>
      {itemName !== 'other' && <Star>*</Star>}
    </div>
  );
}

function InputArea({ item, handleInput, handleCompelete }) {
  switch (item.name) {
    case 'name':
    case 'email':
    case 'phone':
      return (
        <div>
          <InputByText item={item} handleInput={handleInput} handleCompelete={handleCompelete} />
        </div>
      );
    case 'type':
      return (
        <div>
          <InputByRadio item={item} handleInput={handleInput} handleCompelete={handleCompelete} />
        </div>
      );
    case 'howToKnow':
    case 'other':
      return (
        <div>
          <InputByTextArea
            item={item}
            handleInput={handleInput}
            handleCompelete={handleCompelete}
          />
        </div>
      );
  }
}

function InputByText({ item, handleInput, handleCompelete }) {
  return (
    <div>
      <input
        type="text"
        name={item.name}
        value={item.content}
        placeholder="您的回答"
        onChange={(e) => { handleInput(e, item.name); }}
        onBlur={() => { handleCompelete(item.name); }}
      />
    </div>
  );
}

function InputByRadio({ item, handleInput, handleCompelete }) {
  return (
    <div>
      <label htmlFor="1">
        <input
          id="1"
          type="radio"
          name={item.name}
          value="1"
          onClick={(e) => { handleInput(e, item.name); }}
          onBlur={() => { handleCompelete(item.name); }}
        />
        躺在床上用想像力實作
      </label>
      <label htmlFor="2">
        <input
          id="2"
          type="radio"
          name={item.name}
          value="2"
          onClick={(e) => { handleInput(e, item.name); }}
          onBlur={() => { handleCompelete(item.name); }}
        />
        趴在地上滑手機找現成的
      </label>
    </div>
  );
}

function InputByTextArea({ item, handleInput, handleCompelete }) {
  return (
    <div>
      {item.name === 'other'
        ? (
          <Textarea
            name={item.name}
            value={item.content}
            placeholder="您的回答"
            onChange={(e) => { handleInput(e, item.name); }}
          />
        )
        : (
          <Textarea
            name={item.name}
            value={item.content}
            placeholder="您的回答"
            onChange={(e) => { handleInput(e, item.name); }}
            onBlur={() => { handleCompelete(item.name); }}
          />
        )}
    </div>
  );
}

export function Questions({ items, handleInput, handleCompelete }) {
  return (
    items.map(item => (
      <div key={item.name}>
        <QuestionTitleArea titleName={item.titleName} itemName={item.name} />
        <InputArea item={item} handleInput={handleInput} handleCompelete={handleCompelete} />
        <Notice isCompelete={item.isCompelete} isShow={item.isShow}>
          {item.titleName}
為必填
        </Notice>
      </div>
    ))
  );
}

export function SubmitWrapper() {
  return (
    <div>
      <Submit type="submit" placeholder="提交" />
    </div>
  );
}
