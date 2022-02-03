import React from 'react';
import google from '../../assets/google.png';
import slack from '../../assets/slack.png';
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from "../../assets/shopify.png";
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="s" />
    </div>
    <div>
      <img src={slack} alt="s" />
    </div>
    <div>
      <img src={atlassian} alt="s" />
    </div>
    <div>
      <img src={dropbox} alt="s" />
    </div>
    <div>
      <img src={shopify} alt="s" />
    </div>
  </div>
);

export default Brand;