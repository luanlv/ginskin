/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import serialize from 'serialize-javascript';
import { analytics } from '../config';
import Parser from 'html-react-parser';

let myAttr = {
  attribution: "setup_tool",
  page_id : "181757592661149",
  logged_in_greeting : "Chúng tôi có thể giúp gì được cho bạn?",
  logged_out_greeting : "Chúng tôi có thể giúp gì được cho bạn?"
}

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    // eslint-disable-next-line react/forbid-prop-types
    state: PropTypes.object,
    children: PropTypes.string.isRequired,
  };

  static defaultProps = {
    styles: [],
    scripts: [],
    state: null,
  };

  componentDidMount(){

  }

  render() {
    const { title, description, styles, scripts, state, children, v, seo } = this.props;
    return (
      <html className="no-js" lang="vi">
        <head>
          {/* <base href="http://namduocquany.com" /> */}
          {/*<base href="http://localhost:3000" />*/}
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="/ico.png" />
          <link rel="icon" type="image/png" href="ico.png" />
          {/*Og tag*/}
          <meta property="og:locale" content="vi_VN" />
          <meta property="og:type" content="website" />
          <meta property='fb:app_id' content='1054383868055783' />
          <meta property='fb:admins' content='100004231235930' />
          <meta property='fb:admins' content='100008346038178' />
          {(seo && seo.og_title) ? (<meta property="og:title" content={seo.og_title} />) : (<meta property="og:title" content='Ginskin' />) }
          {(seo && seo.url) ? (<meta property="og:url" content={'http://ginskin.vn' + seo.url} />) : (<meta property="og:url" content={'http://ginskin.vn'} />) }
          {(seo && seo.og_image) ? (<meta property="og:image" content={'http://ginskin.vn' + seo.og_image} />) : (<meta property="og:image" content='http://ginskin.vn/image/m5bZaSxOJG-banner.jpg' />)}
          <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/css/jquery-ui.css" />
          <link rel="stylesheet" href="css/bootstrap.min.css" media="all" />
	        <link rel="stylesheet" href="css/swiper.min.css" media="all" />
          <link rel="stylesheet" href="css/common.css" media="all" />
          <link rel="stylesheet" href="css/ginic.css" media="all" />
          <link rel="stylesheet" type="text/css"  href={"/css/app.css?v=" +v }/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/headjs/1.0.3/head.min.js" />
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
          <script dangerouslySetInnerHTML={{ __html: this.props.scriptTop }} />
        </head>

        <body>
          <div
            id="app"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: children }}
          />
          {state && (
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html:
              `window.APP_STATE=${serialize(state, { isJSON: true })}` }}
            />
          )}

          {/*{scripts.map(script => <script key={script} src={script} />)}*/}
          <script
            dangerouslySetInnerHTML={{ __html:
                `head.load("/js/jquery-1.9.1.js")`
                + `.js("/js/bootstrap.min.js" )`
                + `.js("/js/jquery-ui.js" )`
                + `.js("/js/swiper.min.js" )`
                + `.js("/js/main.js" )`
                + `.js("https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.0/js.cookie.min.js?v=${v}")`
                +  `.js("${scripts[0]}?v=${v}")`
                +  `.js("${scripts[1]}?v=${v}")`}}
          >
          </script>
        </body>
      </html>
    );
  }
}

var Facebook = React.createClass({
  componentDidMount: function() {
      this.refs.facebook.getDOMNode().setAttribute('attribution', 'setup_tool');
  },
  render: function() {
      return <div ref="facebook" className="fb-customerchat">
      </div>;
  }
});

export default Html;
// attribution: "setup_tool",
//   page_id : "181757592661149",
//   logged_in_greeting : "Chúng tôi có thể giúp gì được cho bạn?",
//   logged_out_greeting : "Chúng tôi có thể giúp gì được cho bạn?"