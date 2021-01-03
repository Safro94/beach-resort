import { FC, useState, useEffect } from 'react';

import Title from '../../components/title';
import Filter from '../../components/roomsFilter/filter';

import { IRoom, useApplication } from '../../hooks/application';

import styles from './index.module.scss';

interface FilterProps {
  rooms: IRoom[]
}

const getUniqueValues = <T extends string | number | boolean>(items: IRoom[], value: string, firstValue?: T) => {
  const uniqueItems = new Set(items.map(item => item[value]));
  return firstValue ? [firstValue, ...uniqueItems] : [...uniqueItems];
}

const RoomsFilter: FC<FilterProps> = ({ rooms }) => {
  const { setSortedRooms } = useApplication();

  const [filters, setFilters] = useState({
    type: 'all',
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    breakfast: false,
    pets: false
  });

  useEffect(() => {
    const maxValue = (prop: string): number => Math.max(...rooms.map(room => room[prop] as number))
    const maxPrice = maxValue('price');

    setFilters(prevFilters => ({
      ...prevFilters,
      maxPrice,
      price: maxPrice,
      maxSize: maxValue('size')
    }))
  }, [rooms]);

  useEffect(() => {
    let tempRooms = [...rooms];

    // filter by type
    if (filters.type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === filters.type);
    }

    // filter by capacity
    if (filters.capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= filters.capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= filters.price);

    //filter by breakfast
    if (filters.breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (filters.pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    setSortedRooms(tempRooms);
  }, [filters, rooms, setSortedRooms]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const value = e.target.type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;

    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }))
  }

  return (
    <section className={styles.container}>
      <Title title='search rooms' />
      <form className={styles.filterForm}>
        <Filter label='room type' type='type'>
          <select
            name='type'
            id='type'
            onChange={handleChange}
            className={styles.control}
            value={filters.type}
          >
            {getUniqueValues<string>(rooms, 'type', 'all').map((item: any) => <option value={item} key={item}>{item}</option>)}
          </select>
        </Filter>

        <Filter label='guests' type='capacity'>
          <select
            name='capacity'
            id='capacity'
            onChange={handleChange}
            className={styles.control}
            value={filters.capacity}
          >
            {getUniqueValues<number>(rooms, 'capacity').map((item: any) => <option value={item} key={item}>{item}</option>)}
          </select>
        </Filter>

        <Filter label={`room price $${filters.price}`} type='price'>
          <input
            type='range'
            name='price'
            min={filters.minPrice}
            max={filters.maxPrice}
            id='price'
            value={filters.price}
            onChange={handleChange}
            className={styles.control}
          />
        </Filter>

        <Filter label='breakfast' type='breakfast'>
          <input
            type="checkbox"
            name="breakfast"
            checked={filters.breakfast}
            onChange={handleChange}
          />
        </Filter>

        <Filter label='pets' type='pets'>
          <input
            type="checkbox"
            name="pets"
            checked={filters.pets}
            onChange={handleChange}
          />
        </Filter>
      </form>
    </section >
  )
}

export default RoomsFilter