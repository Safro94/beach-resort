
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { IRoom } from '../../hooks/application'

import styles from './index.module.scss'
import { ROOMS } from '../../utils/routes';
import defaultImg from '../../assets/images/room-1.jpeg';

interface IRoomProps {
  room: IRoom
}

const Room: FC<IRoomProps> = ({ room: { name, slug, images, price } }) => {
  return (
    <article className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={images[0] || defaultImg} alt="Single room" />
        <div className={styles.price}>
          <h6 className={styles.number}>${price}</h6>
          <span>per night</span>
        </div>
        <Link to={`${ROOMS}/${slug}`} className={styles.link}>
          Features
        </Link>
      </div>
      <span className={styles.name}>{name}</span>
    </article>
  )
}

export default Room;