import users from '../incomingData/users.json';
import stats from '../incomingData/data.json';
import friends from '../incomingData/friends.json';
import transactions from '../incomingData/transactions.json';

import { Container, Section } from './App.styled';
import { Profile } from './Profile/Profile';
import { StatisticsSection } from './Statistics/StatisticsSection/StatisticsSection';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Container>
      <Section>
        {users.map(({ username, tag, location, avatar, stats }) => (
          <Profile
            key={username}
            username={username}
            tag={tag}
            location={location}
            avatar={avatar}
            stats={stats}
          />
        ))}
      </Section>
      <StatisticsSection title="Upload stats" stats={stats} />
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
};
