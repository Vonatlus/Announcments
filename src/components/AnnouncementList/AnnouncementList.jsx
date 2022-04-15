import { useContext, useState } from 'react';
import { AnnoncementContext } from '../../AnnoncementProvider';
import './AnnouncementList.css';

export function AnnouncementList() {
  const {
    setTitle,
    setBody,
    announcements,
    setAnnouncements,
    setEdit,
    setSelectedAnnouncement,
    setTitleError,
    setBodyError,
  } = useContext(AnnoncementContext);

  const [query, setQuery] = useState('');

  const deleteAnnouncement = (id) => {
    const list = announcements.filter(announcement => announcement.id !== id);

    setTitleError(false);
    setBodyError(false);
    setTitle('');
    setBody('');
    setEdit(false);
    setAnnouncements(list);
  };

  const editAnnouncement = (id) => {
    const selectedAnnouncement = announcements.find(announcement => announcement.id === id);
    setTitle(selectedAnnouncement.title);
    setBody(selectedAnnouncement.body);
    setEdit(true);
    setSelectedAnnouncement(selectedAnnouncement);
  }

  const announcementVisible =  announcements.filter(announcement => {
    const lowerTitle = announcement.title.toLowerCase();
    const lowerQuery = query.toLowerCase();

    return lowerTitle.includes(lowerQuery);
  })

  return (
    <>
      <section className="panel is-info column p-0">
        <p className="panel-heading">
          Announcements
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input
              className="input is-info"
              type="text"
              placeholder="Search"
              onChange={event => setQuery(event.target.value)}
            />
          </p>
        </div>
        <ul className="panel">
          {announcementVisible.map((announcement) => (
            <li
              key={announcement.id}
              className="panel-block is-active is-flex is-justify-content-space-between"
            >
              <div>
                <p><b>Title:</b> {announcement.title}</p>

                <p><b>Description:</b> {announcement.body}</p>

                <p><b>Date:</b> {new Date(announcement.createdAt).toDateString()}</p>
              </div>

              <div className="button-size ml-2">
                <button
                  onClick={() => editAnnouncement(announcement.id)}
                  className="button is-info mr-2"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteAnnouncement(announcement.id)}
                  className="button is-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          )).reverse()}
        </ul>
      </section>
    </>

  )
}

