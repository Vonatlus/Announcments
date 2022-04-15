import { useContext } from 'react';
import './AnnouncementAdd.css';
import { AnnoncementContext } from '../../AnnoncementProvider';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

export function AnnouncementAdd() {
  const {
    title,
    setTitle,
    body,
    setBody,
    announcements,
    setAnnouncements,
    edit,
    setEdit,
    selectedAnnouncement,
    titleError,
    setTitleError,
    bodyError,
    setBodyError,
  } = useContext(AnnoncementContext);

  const addAnnouncement = (event) => {
    event.preventDefault();

    if (title && body) {
      setAnnouncements([...announcements, {
        id: uuidv4(),
        title: title || 'No title',
        body: body || 'No description',
        createdAt: new Date(),
      }])

      setTitle('');
      setBody('');
    }

    setTitleError(!title);
    setBodyError(!body);
  }

  const editAnnouncement = (event) => {
    event.preventDefault();

    if (title && body) {
      selectedAnnouncement.title = title;
      selectedAnnouncement.body = body;

      setEdit(false);
      setTitle('');
      setBody('');
    }

    setTitleError(!title);
    setBodyError(!body);
  };

  return (
    <form
      className="box column is-2 is-one-fifth ml-4"
      onSubmit={edit ? (editAnnouncement) : (addAnnouncement)}
      style={{ height: "max-content" }}
    >
      <div className="field">
        <div className="control">
          <input
            className={`input ${classNames((titleError && !title) && 'is-danger')}`}
            type="text"
            placeholder={title === 'error' ? 'Title is required' : 'Title'}
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          {(titleError && !title) && <p className="has-text-danger is-size-7">Enter title</p>}
        </div>
      </div>

      <div className="field mb-6">
        <div className="control">
          <textarea
            className={`textarea ${classNames((bodyError && !body) && 'is-danger')}`}
            type="text"
            placeholder="Description"
            value={body}
            onChange={event => setBody(event.target.value)}
          />
          {(bodyError && !body) && <p className="has-text-danger is-size-7">Enter description</p>}
        </div>
      </div>

      <button
        className={`button ${classNames(edit ? ("is-info") : ("is-success"))} is-fullwidth`}
        type="submit"
      >
        {edit ? ("Edit") : ("Add")}
      </button>
    </form >
  )
}

