import Head from 'next/head';
import text from './text.json';

const Facebook = ({ url, title, description }) => [
  <meta key="fb_id" property="fb:profile_id" content={text.facebook_id} />,
  <meta key="fb_url" property="og:url" content={url} />,
  <meta key="fb_title" property="og:title" content={title} />,
  <meta key="fb_description" property="og:description" content={description} />,
  <meta key="fb_image" property="og:image" content={text.social_logo} />,
];

const Twitter = ({ title, description }) => [
  <meta key="tw_card" name="twitter:card" content="summary_large_image" />,
  <meta key="tw_site" name="twitter:site" content={text.twitter_id} />,
  <meta key="tw_creator" name="twitter:creator" content={text.twitter_id} />,
  <meta key="tw_title" name="twitter:title" content={title} />,
  <meta
    key="tw_description"
    name="twitter:description"
    content={description}
  />,
  <meta key="tw_image" name="twitter:image" content={text.social_logo} />,
];

const Schema = () => (
  <script
    key="schema_corporation"
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: `
      {
        "@context": "http://schema.org",
        "@type": "VideoGame",
        "name": "Guitar Hunter",
        "url": "https://guitar-hunter.eu",
        "image": "/static/phone.png",
        "description": "Just in 15 minutes you will have become a guitar pro! This game teach you without boring countless lessons.",
        "inLanguage":["English"],
        
        "author":{
          "@type":"Organization",
          "name":"Linkorn",
          "url":"//linkorn.ru"
      }
      }
      `,
    }}
  />
);

const Meta = props => [
  <Head key="head">
    <title key="title">{props.title}</title>
    <meta key="description" name="description" content={props.description} />
    <meta key="keywords" name="keywords" content={props.keywords} />
    <Facebook {...props} />
    <Twitter {...props} />
    <Schema />
  </Head>,
];

export default Meta;
