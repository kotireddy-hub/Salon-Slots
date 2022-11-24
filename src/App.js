import React from 'react';
import './style.css';
import Slots from './Slots';
import { getSalonTimeSlots } from './utils/utils';
export default function App() {
  const slots = getSalonTimeSlots(8, 23);
  console.log(slots, 'slots');
  const SlotList = [
    {
      slotid: 8,
      slotStart: 8,
      SlotDayOrNight: 'AM',
    },
    {
      slotid: 9,
      slotStart: 9,
      SlotDayOrNight: 'AM',
    },
    {
      slotid: 10,
      slotStart: 10,
      SlotDayOrNight: 'AM',
    },
    {
      slotid: 11,
      slotStart: 11,
      SlotDayOrNight: 'AM',
    },
    {
      slotid: 12,
      slotStart: 12,
      SlotDayOrNight: 'PM',
    },
    {
      slotid: 1,
      slotStart: 1,
      SlotDayOrNight: 'PM',
    },
    {
      slotid: 2,
      slotStart: 2,
      SlotDayOrNight: 'PM',
    },
    {
      slotid: 3,
      slotStart: 3,
      SlotDayOrNight: 'PM',
    },
    {
      slotid: 4,
      slotStart: 4,
      SlotDayOrNight: 'PM',
    },
    {
      slotid: 5,
      slotStart: 5,
      SlotDayOrNight: 'PM',
    },
  ];
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Slots SlotList={SlotList} />
    </div>
  );
}
