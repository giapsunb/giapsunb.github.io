
    window.reactComponents = {};

    window.vueComponents = {};

  
      import React from "react";

      import ReactDOM from "react-dom";


      import ReactWrapper from '../node_modules/better-docs/lib/react-wrapper.js';

      window.React = React;

      window.ReactDOM = ReactDOM;

      window.ReactWrapper = ReactWrapper;

    
    import './styles/reset.css';

    import './styles/iframe.css';

  import Component0 from '../src/App.js';
reactComponents['App'] = Component0;

import Component1 from '../src/components/Button/Button.js';
reactComponents['Button'] = Component1;

import Component2 from '../src/components/CheckboxList/CheckboxList.js';
reactComponents['CheckboxList'] = Component2;

import Component3 from '../src/components/Navbar/Navbar.js';
reactComponents['Navbar'] = Component3;