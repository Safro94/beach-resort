import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import RoomsService from '../../services/rooms';

export interface IRoom {
  [key: string]: string | number | boolean | string[];
  name: string;
  slug: string;
  type: string;
  price: number;
  size: number;
  capacity: number;
  pets: boolean;
  breakfast: boolean;
  featured: boolean;
  description: string;
  extras: string[];
  images: string[];
  id: string,
}

type RoomType = {
  rooms: IRoom[],
  featuredRooms: IRoom[],
  loading: boolean
}

type RoomContextType = {
  roomsState: RoomType
  sortedRooms: IRoom[],
  setSortedRooms: Dispatch<SetStateAction<IRoom[]>>,
}

const ApplicationContext = createContext<RoomContextType>({ roomsState: { rooms: [], featuredRooms: [], loading: true }, sortedRooms: [], setSortedRooms: () => { } });

const useApplication = () => {
  const { roomsState, sortedRooms, setSortedRooms } = useContext<RoomContextType>(ApplicationContext);

  const getRoom = (slug: string) => roomsState.rooms.find(item => item.slug === slug);

  return { ...roomsState, getRoom, sortedRooms, setSortedRooms };
};

const ApplicationProvider: React.FC = ({ children }) => {
  const [roomsState, setRoomsState] = useState<RoomType>({
    rooms: [], featuredRooms: [], loading: true
  });

  const [sortedRooms, setSortedRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    const data = RoomsService.getData();

    setRoomsState({
      rooms: data,
      featuredRooms: data.filter(room => room.featured),
      loading: false
    })

    setSortedRooms(data);
  }, [])

  return (
    <ApplicationContext.Provider value={{ roomsState, sortedRooms, setSortedRooms }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export { useApplication, ApplicationProvider };