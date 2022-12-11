import users from '../incomingData/users.json';
import stats from '../incomingData/data.json';

import { Profile } from './Profile/Profile';
import { StatisticsSection } from './Statistics/StatisticsSection/StatisticsSection';
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
      <StatisticsSection title="Upload stats" stats={stats} />
    </Container>
  );
};
