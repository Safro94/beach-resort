import { FC } from 'react';

// import Filter from './roomsFilter';
import Loading from '../../components/loading';
import Room from '../../components/room';
import Filter from '../../components/roomsFilter';

import { useApplication } from '../../hooks/application';

import styles from './index.module.scss';

const Rooms: FC = () => {
  const { rooms, sortedRooms, loading } = useApplication();

  if (loading) return <Loading />

  return (
    <>
      <Filter rooms={rooms} />
      {
        !sortedRooms.length
          ? <h3 className={styles.text}>unfortunately no rooms matched</h3>
          : <section className={styles.roomsContainer}>
            <div className={styles.rooms}>
              {sortedRooms.map(room => <Room key={room.id} room={room} />)}
            </div>
          </section>
      }
    </>
  )
}

export default Rooms;