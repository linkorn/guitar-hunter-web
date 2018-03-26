import styled from 'react-emotion';
import React from 'react';
import axios from 'axios';
import text from '../../shared/text.json';

const Wrapper = styled.main`
  padding: 50px 0 50px 0;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.media.mobile`
  padding: 50px 16px 50px 16px;
  `};
`;

const H1 = styled.h1`
  color: #464646;
  text-align: center;
  font-size: 40px;
`;
const H2 = styled.h2`
  color: #464646;
  text-align: center;
  font-size: 24px;
`;

const Presentation = styled.piclure`
  > img {
    margin-left: 10px;
  }
  ${({ theme }) => theme.media.mobile`
  >img{
    width: 100%;
    height: auto;
    }
  `};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff;
`;

const Input = styled.input`
  width: 360px;
  height: 55px;
  border: 5px solid #e95505;
  background: #fff;
  font-size: 24px;
  padding: 0 10px;
  font-family: 'VT323', monospace;
  margin-bottom: 10px;
  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `};
`;

const Submit = styled.button`
  border: none;
  background: #e95505;
  position: relative;
  width: 220px;
  height: 46px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  font-family: 'VT323', monospace;
  z-index: 100;
  text-transform: uppercase;
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    left: -5px;
    right: -5px;
    background: #e95505;
    z-index: -1;
  }
`;

const ThankYou = styled.div`
  font-size: 30px;
  color: #fff;
  text-transform: uppercase;
`;

class Subscription extends React.Component {
  state = {
    email: '',
    sended: false,
  };
  inputChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.submit();
    }
  };
  submit() {
    const { email } = this.state;

    if (!/.*@.*\..*/.test(email)) return;
    const bodyFormData = new FormData();
    bodyFormData.set('mail', email);
    axios({
      method: 'post',
      url: 'https://guitar-hunter.eu/subscribe',
      data: bodyFormData,
      config: {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Cache-Control': 'no-cache',
        },
      },
    })
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error);
      });
    this.setState({ sended: true });
  }
  formSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.submit();
  };
  render() {
    return this.state.sended ? (
      <ThankYou>Thank you!</ThankYou>
    ) : (
      <Form onSubmit={this.formSubmit}>
        <Label for="email">
          Enter your email and we'll let you know when the game is available
        </Label>
        <Input
          onKeyPress={this.handleKeyPress}
          placeholder="EMAIL"
          id="email"
          type="email"
          value={this.state.email}
          onChange={this.inputChange}
        />
        <Submit type="submit">Subscribe</Submit>
      </Form>
    );
  }
}

const Logo = styled.picture`
  text-align: center;
  ${({ theme }) => theme.media.mobile`
  >img{
    width: 100%;
    height: auto;
    }
  `};
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
const Markets = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  > img {
    opacity: 0.6;
  }
`;

export default () => (
  <Wrapper>
    <Logo>
      <img src="/static/logo.png" alt={text.title} />
    </Logo>
    <HiddenSpan>{text.title}</HiddenSpan>
    <H1 dangerouslySetInnerHTML={{ __html: text.tagline }} />
    <H2 dangerouslySetInnerHTML={{ __html: text.subtagline }} />
    <Presentation>
      <img src="/static/phone.png" alt="Game screenshot" />
    </Presentation>
    <Subscription />
    <Markets>
      <img src="/static/google.png" aria-hidden="true" alt="Google Play" />
      <img src="/static/apple.png" aria-hidden="true" alt="App Store" />
    </Markets>
  </Wrapper>
);
