import moment from 'moment';
export function getSalonTimeSlots(openHour = 7, closeHours = 18) {
  const slot = [];
  const currentTime = moment();
  for (let hour = openHour; hour <= closeHours; hour++) {
    const fristSlot = moment({ hour: hour, minutes: 0 });
    const secondSlot = moment({ hour: hour, minutes: 30 });
    slot.push({
      hour: fristSlot.format('hh::mm A'),
      slots: [
        {
          timing: fristSlot.format('hh::mm A'),
          isValid: fristSlot.isAfter(currentTime),
        },
        {
          timing: secondSlot.format('hh::mm A'),
          isValid: secondSlot.isAfter(currentTime),
        },
      ],
    });
  }
  return slot;
}
