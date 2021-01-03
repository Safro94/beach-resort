import { FC } from 'react'

import styles from './index.module.scss';

interface FilterProps {
  label: string,
  type: string,
}

const Filter: FC<FilterProps> = ({ label, type, children }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={type} className={styles.label}>{label}</label>
      {children}
    </div>
  )
}

export default Filter;