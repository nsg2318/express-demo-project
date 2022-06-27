export type Cat = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
}


export const Cats: Cat[] = [
  {
    id: 'abcd',
    name: 'blue',
    age: 123,
    species: 'Russian Blue',
    isCute: true,
    friends: ['efgh','ijkl']
  },
  {
    id: 'efgh',
    name: 'som',
    age: 4,
    species: 'Korean Black',
    isCute: false,
    friends: ['abcd']
  },
  {
    id: 'ijkl',
    name: 'Red',
    age: 888,
    species: 'American',
    isCute: true,
    friends: ['abcd']
  }
]