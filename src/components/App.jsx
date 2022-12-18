import users from '../incomingData/users.json';
import stats from '../incomingData/data.json';
import friends from '../incomingData/friends.json';
import transactions from '../incomingData/transactions.json';

import { Box } from './Box/Box';
import { Profile } from './Profile/Profile';
import { StatisticsSection } from './Statistics/StatisticsSection/StatisticsSection';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Button } from './Button/Button';
import { HiThumbUp, HiCursorClick } from 'react-icons/hi';

export const App = () => {
  return (
    <Box variant="container">
      <Box variant="section" as="section" justifyContent="space-between">
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
      </Box>
      <StatisticsSection title="Upload stats" stats={stats} />
      <Box variant="section" as="section">
        <FriendList friends={friends} />
      </Box>
      <Box variant="section" as="section">
        <TransactionHistory items={transactions} />
      </Box>
      <Box variant="section" as="section" justifyContent="space-around">
        <Button icon={HiThumbUp} iconSize="25">
          Like
        </Button>
        <Button>Button</Button>
        <Button icon={HiCursorClick} iconSize="25">
          Click
        </Button>
      </Box>
    </Box>
  );
};
