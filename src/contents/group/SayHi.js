import styled from 'styled-components';

const SayHi = ()=>{
   return <div>
        <Styled_h1>CEO 및 회사 인사말</Styled_h1>
        <Basic_text>
        우리 <Colored_text_blue>하이그룹 운송사업</Colored_text_blue>은 <Colored_text_lightblue>“친절, 사랑, 정직, 안전”</Colored_text_lightblue>을 기반으로<br/>
        최고의 서비스를 제공하는 최상의 교통 서비스 문화에 이바지하는 그룹입니다.<br/> 
        우리 <Colored_text_blue>하이그룹 운송사업</Colored_text_blue>은 고객들과 회사의 원만한 소통과 상생을 바탕으로 항상 미래를 위한<br/>
        획기적인 대안들을 마련하여 새로운 희망의 변화를 만들어 최고의 서비스로 보답하겠습니다.<br/>
        </Basic_text>
    </div>
};

const Styled_h1=styled.h1`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 58px;
text-align: center;
margin: 15px;
`
const Basic_text=styled.div`
font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 29px;
text-align: center;
margin : 20px 100px;
padding : 30px;
border-top: 0.5px solid rgba(0, 0, 0, 0.25);
`
const Colored_text_blue=styled.span`
color: #004A95;
font-weight: 700;
`

const Colored_text_lightblue=styled.span`
color: #0056AD;
font-weight: 500;
`

export default SayHi;