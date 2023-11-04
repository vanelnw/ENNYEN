import { NavLink } from 'react-router-dom';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';

const statesData = [
  {
    id: 1,
    name: 'Alabama',
  },
  {
    id: 2,
    name: 'Alaska',
  },
  {
    id: 3,
    name: 'Arizona',
  },
  {
    id: 4,
    name: 'Arkansas',
  },
  {
    id: 5,
    name: 'California',
  },
  {
    id: 6,
    name: 'Colorado',
  },
  {
    id: 7,
    name: 'Connecticut',
  },
  {
    id: 8,
    name: 'Delaware',
  },
  {
    id: 9,
    name: 'Florida',
  },
  {
    id: 10,
    name: 'Georgia',
  },
  {
    id: 11,
    name: 'Hawaii',
  },
  {
    id: 12,
    name: 'Idaho',
  },
  {
    id: 13,
    name: 'Illinois',
  },
  {
    id: 14,
    name: 'Indiana',
  },
  {
    id: 15,
    name: 'Iowa',
  },
  {
    id: 16,
    name: 'Kansas',
  },
  {
    id: 17,
    name: 'Kentucky',
  },
  {
    id: 18,
    name: 'Louisiana',
  },
  {
    id: 19,
    name: 'Maine',
  },
  {
    id: 20,
    name: 'Maryland',
  },
  {
    id: 21,
    name: 'Massachusetts',
  },
  {
    id: 22,
    name: 'Michigan',
  },
  {
    id: 23,
    name: 'Minnesota',
  },
  {
    id: 24,
    name: 'Mississippi',
  },
  {
    id: 25,
    name: 'Missouri',
  },
  {
    id: 26,
    name: 'Montana',
  },
  {
    id: 27,
    name: 'Nebraska',
  },
  {
    id: 28,
    name: 'Nevada',
  },
  {
    id: 29,
    name: 'New Hampshire',
  },
  {
    id: 30,
    name: 'New Jersey',
  },
  {
    id: 31,
    name: 'New Mexico',
  },
  {
    id: 32,
    name: 'New York',
  },
  {
    id: 33,
    name: 'North Carolina',
  },
  {
    id: 34,
    name: 'North Dakota',
  },
  {
    id: 35,
    name: 'Ohio',
  },
  {
    id: 36,
    name: 'Oklahoma',
  },
  {
    id: 37,
    name: 'Oregon',
  },
  {
    id: 38,
    name: 'Pennsylvania',
  },
  {
    id: 39,
    name: 'Rhode Island',
  },
  {
    id: 40,
    name: 'South Carolina',
  },
  {
    id: 41,
    name: 'South Dakota',
  },
  {
    id: 42,
    name: 'Tennessee',
  },
  {
    id: 43,
    name: 'Texas',
  },
  {
    id: 44,
    name: 'Utah',
  },
  {
    id: 45,
    name: 'Vermont',
  },
  {
    id: 46,
    name: 'Virginia',
  },
  {
    id: 47,
    name: 'Washington',
  },
  {
    id: 48,
    name: 'West Virginia',
  },
  {
    id: 49,
    name: 'Wisconsin',
  },
  {
    id: 50,
    name: 'Wyoming',
  },
];

const RegionsSection = () => {
  return (
    <section className="py-10 px-8">
      <SectionTitle
        title1="Discover Suppliers from Around USA"
        title2="Find Your Perfect Match by  Region!"
      />
      <Container>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-5 mt-5">
          {statesData.map(section => (
            <NavLink to="" key={section.id} className="text-green-700">
              <p>{section.name}</p>
            </NavLink>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RegionsSection;