export interface Activity {
  id: number;
  title: string;
  description: string;
  imageAlt: string;
}

export const activitiesData: Activity[] = [
  {
    id: 1,
    title: 'Soccer',
    description: 'Our soccer team participates in local and regional tournaments.',
    imageAlt: 'Soccer Activity'
  },
  {
    id: 2,
    title: 'Netball',
    description: 'Developing teamwork and physical fitness through netball.',
    imageAlt: 'Netball Activity'
  },
  {
    id: 3,
    title: 'Choral Music',
    description: 'Our choir achieved position 2 in the AU Anthem category and position 3 in the National Anthem category at the ABC Motsepe Schools Eisteddfod.',
    imageAlt: 'Choir Activity'
  },
  {
    id: 4,
    title: 'Speech',
    description: 'Enhancing public speaking and communication skills.',
    imageAlt: 'Speech Activity'
  },
  {
    id: 5,
    title: 'Athletics',
    description: 'Promoting physical fitness and competitive spirit.',
    imageAlt: 'Athletics Activity'
  },
  {
    id: 6,
    title: 'Entrepreneurship',
    description: 'Our students were 2nd runner-up in the Mpumalanga province for the Eskom Simama Ranta High School Entrepreneurship Education Competition in 2016.',
    imageAlt: 'Entrepreneurship Activity'
  },
];