export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    title: 'ABC Motsepe Schools Eisteddfod',
    date: '2024',
    description: 'Our choir achieved position 2 in the AU Anthem category and position 3 in the National Anthem category.'
  },
  {
    id: 2,
    title: 'Eskom Simama Ranta Competition',
    date: '2016',
    description: 'Our students were 2nd runner-up in the Mpumalanga province for the High School Entrepreneurship Education Competition.'
  },
  {
    id: 3,
    title: 'Desk Donation Ceremony',
    date: 'April 9, 2024',
    description: 'Mpumalanga MEC for Public Works, Roads, and Transport donated 100 classroom desks to the school.'
  },
  {
    id: 4,
    title: 'Opening of Inqubeko Secondary School',
    date: '2012',
    description: 'New relief school established to address overcrowding at Amadlelo Aluhlaza.'
  },
  {
    id: 5,
    title: 'Opening of Ubuhlebuzile Secondary School',
    date: '2015',
    description: 'Additional relief school opened to address overcrowding at Amadlelo Aluhlaza.'
  },
];