
import { FC } from 'react';

import loading from '../../assets/images/gif/loading-arrow.gif';

import styles from './index.module.scss'

interface ILoadingProps {
  text: string
}

const Loading: FC<ILoadingProps> = ({ text }) => {
  return (
    <div className={styles.loading}>
      <h4>{text}</h4>
      <img src={loading} alt='Loading' />
    </div>
  )
}

export default Loading;