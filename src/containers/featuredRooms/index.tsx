import { FC } from 'react'

import Loading from '../../components/loading';
import Room from '../../components/room';
import Title from '../../components/title';

import { useApplication } from '../../hooks/application';

import styles from './index.module.scss'

const FeatureRooms: FC = () => {
  const { featuredRooms, loading } = useApplication();

  return (
    <section className={styles.container}>
      <Title title='featured rooms' />

      <div className={styles.roomsContainer}>
        {
          loading
            ? <Loading text='Loading rooms' />
            : featuredRooms.map(room => <Room key={room.id} room={room} />)
        }
      </div>
    </section>
  )
}

export default FeatureRooms
