import styled from 'styled-components';
import CEO_img from './CEO_img.png';

const CEOIntroduction = () => {
  return (
    <SizedContext>
      <Sized_h1>대표이사 소개</Sized_h1>
      <Sized_text>
        “하이그룹 운송사업 대표이사 한창인입니다. 최고의 서비스로
        보답하겠습니다.”
      </Sized_text>
      <img src={CEO_img} alt="대표이사 사진 및 약력"></img>
    </SizedContext>
  );
};

const SizedContext = styled.div`
  padding: 0 100px;
`;
const Sized_h1 = styled.h1`
  display: block;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
  padding: 5px 0;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 46px;
  display: flex;
  align-items: center;
  color: #000000;
`;
const Sized_text = styled.span`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 55px;
`;
export default CEOIntroduction;
