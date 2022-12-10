import { Profile } from './Profile/Profile';
import { StatisticsSection } from './Statistics/Statistics';
import users from '../incomingData/users.json';
import { Container, Section } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section>
        {users.map(user => (
          <Profile
            key={user.username}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        ))}
      </Section>
      <StatisticsSection />
    </Container>
  );
};
