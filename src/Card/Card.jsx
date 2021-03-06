/**
 * Card Component for tingle
 * @author caiyongmin
 *
 * Copyright 2014-2016, Tingle Team.
 * All rights reserved.
 */

const React = require('react');
const classnames = require('classnames');
const Context = require('../Context');

class Card extends React.Component {

  render() {
    const t = this;
    const className = classnames(
      Context.prefixClass('card'),
      {
        'card-mode-full': t.props.mode === 'full',
        [t.props.className]: !!t.props.className,
      },
    );

    return (
      <div className={className}>
        {t.props.children}
      </div>
    );
  }
}

Card.defaultProps = {
  mode: 'normal',
  className: '',
};

// http://facebook.github.io/react/docs/reusable-components.html
Card.propTypes = {
  className: React.PropTypes.string,
  mode: React.PropTypes.oneOf(['normal', 'full']),
};

Card.displayName = 'Card';

module.exports = Card;
