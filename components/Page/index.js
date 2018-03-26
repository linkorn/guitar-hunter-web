import styled from 'react-emotion';

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  bottom: 0;
  right: 0;
  ${({ theme }) => theme.media.mobile`
  background: linear-gradient(to bottom, #7db9e8 0%, #793e19 100%);
  `};
`;

export default Bg;
