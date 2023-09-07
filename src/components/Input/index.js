import React, { useState } from 'react';
import { PriceInput, ErrorText, InputContainer } from '../Input/styles';
import { StyledBtn } from '../Button/styles';

function Input() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  // price input에 문자 입력했을 때 error 나타내기 위해
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // 값이 숫자인지 검사하는 정규식
  const handlePriceChange = (e) => {
    const value = e.target.value;
    // ','는 허용하는 정규식 👉 (error체크 위해서)
    // 오류 검사 수행 전 ',' setPrice(Number(value).toLocaleString() 으로 설정해버리니
    // 숫자가 '1,000' 과 같이 문자열로 변환되어서 숫자를 입력해도 문자입력하라고 떠버림..😣
    const numCheck = /^[\d,]*$/.test(value);

    // 정규식에 잘 해당되면 error false
    if (numCheck) {
      setError(false);
      // 숫자로 변환하기 전에 ',' 제거
      setPrice(Number(value.replaceAll(',', '')).toLocaleString());
      // 값에 숫자 외 값 있을 경우 error를 true로 !
    } else {
      setError(true);
    }
  };

  // 입력 값 없을 때 alert 띄우기
  const handleSubmit = (e) => {
    e.preventDefault();
    if ((!name && !price) || price === '0') {
      alert(`이름과 가격 모두 써주세용🤗`);
      return;
    }
    const formattedPrice = price ? price.replaceAll(',', '') : '';
    alert(`{ name: ${name}, price: ${formattedPrice} }`);
  };

  return (
    <InputContainer>
      <h2>Input</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-set">
          <label>이름</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div className="input-set">
          <label>가격</label>
          <PriceInput
            type="text"
            value={price}
            onChange={handlePriceChange}
            $error={error} // '$' 접두사로 변경
          />
        </div>
        {error && <ErrorText>숫자만 입력해주세요😣</ErrorText>}
        <div className="btn">
          <StyledBtn type="submit">저장</StyledBtn>
        </div>
      </form>
    </InputContainer>
  );
}

export default Input;
