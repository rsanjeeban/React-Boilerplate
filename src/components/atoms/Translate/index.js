import PropTypes from 'prop-types';
import I18n from 'i18n-js';
import { LOCAL_STORE_LANGUAGE } from 'constant';

const lang = localStorage.getItem(LOCAL_STORE_LANGUAGE);
I18n.defaultLocale = 'en';
I18n.locale = lang;
// TODO how to get locale

const en = require('./translations/en.json');
const empty = require('./translations/empty.json');

I18n.fallbacks = true;

const propTypes = {
  content: PropTypes.string,
  params: PropTypes.arrayOf(PropTypes.shape({})),
};

const defaultProps = {
  content: '',
  params: null,
};

I18n.translations = {
  en,
  empty,
};

const Translate = ({ content, params }) => I18n.t(content, params);

Translate.propTypes = propTypes;
Translate.defaultProps = defaultProps;

export default Translate;
