import React from 'react';

export default function Slots(props) {
  const { SlotList = [] } = props || [];
  return SlotList?.map((Slot) => (
    <div className="ui_slots" key={Slot.slotid}>
      <div>{Slot.slotStart}:00</div>
      <button>
        {Slot.slotStart}:00{Slot.SlotDayOrNight}
      </button>
      <button>
        {Slot.slotStart}:30{Slot.SlotDayOrNight}
      </button>
    </div>
  ));
}
