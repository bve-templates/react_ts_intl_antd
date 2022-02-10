import React from 'react';
import intl from 'react-intl-universal';
import Button from '@/components/button';
import styles from './index.scss';

function Page(props) {
  return (
    <div className={styles.home}>
      <Button className={styles.btn}>按钮</Button>
      <Button className={styles.btn} disabled>
        按钮 disabled
      </Button>
      <div className="sm-4">国际化：{intl.get('home')}</div>
    </div>
  );
}
export default React.memo(Page);
