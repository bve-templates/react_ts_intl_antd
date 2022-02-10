import React from 'react';
import styles from './index.scss';

require(`@/assets/svgs`);
require(`@/assets/iconfont/iconfont.css`);

interface Icon {
  props: {
    onClick?: () => void;
    className?: string;
    type?: string;
    style?: object;
  };
}

class Icon extends React.Component {
  render() {
    const { className, onClick, type, style, ...restProps } = this.props;
    const classNames: string[] = [];
    if (className) {
      classNames.push(className);
      if (!type) {
        classNames.push(styles.icon, 'iconfont');
      }
    }
    if (type) {
      classNames.push(styles.svgicon, `svg-icon-${type}`);
    }

    return type ? (
      <svg className={classNames.join(' ')} {...restProps} style={style}>
        <use xlinkHref={`#icon-${type}`} />
      </svg>
    ) : (
      <i onClick={onClick} className={classNames.join(' ')} />
    );
  }
}
export default Icon;
