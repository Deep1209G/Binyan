export const services = [
  { id: '1', title: 'Interior Design' },
  { id: '2', title: 'Renovation' },
  { id: '3', title: 'Landscaping' },
  { id: '4', title: 'Plumbing' },
  { id: '5', title: 'Lighting' },
  { id: '6', title: 'Painting' },
  { id: '7', title: 'Wiring' },
  { id: '8', title: 'Havc' },
  { id: '9', title: 'Painting' },
  { id: '10', title: 'Repair' },
  { id: '11', title: 'Painting' },
  { id: '12', title: 'Wiring' },
  { id: '13', title: 'Havc' },
  { id: '14', title: 'Painting' },
  { id: '15', title: 'Repair' },
];

export const chunkArray = (data: any[], size: number) => {
  const result = [];
  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }
  return result;
};
