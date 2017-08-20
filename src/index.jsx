require("./index.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import CurrencyApplication from './currencyApplication'

jQuery(document).ready(() => {
    ReactDOM.render(
        <CurrencyApplication />,
        document.getElementById('page-content')
    );
});
