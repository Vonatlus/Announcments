import './App.css';
import { AnnouncementList } from './components/AnnouncementList/AnnouncementList';
import { AnnouncementAdd } from './components/AnnouncementAdd/AnnouncementAdd';

function App() {
  return (
    <div className="container is-fullhd columns p-5 mx-auto">
      <AnnouncementList />
      <AnnouncementAdd />
    </div>
  );
}

export default App;
