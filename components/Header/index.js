import styled from 'react-emotion';
import text from '../../shared/text.json';

const Logo = styled.picture`
  width: 467px;
  height: 172px;
`;

const HiddenSpan = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default () => (
  <header>
    <Logo>
      <img src="/static/logo.png" alt={text.title} />
    </Logo>
    <HiddenSpan>{text.title}</HiddenSpan>
  </header>
);
