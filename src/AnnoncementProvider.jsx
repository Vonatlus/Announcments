import React, { useEffect, useState } from "react";
import { annoncementsFromServer } from "./api";

export const AnnoncementContext = React.createContext({
  title: '',
  setTitle: () => {},
  body: '',
  setBody: () => {},
  announcements: [],
  setAnnouncements: () => {},
  edit: '',
  setEdit: () => {},
  selectedAnnouncement: '',
  setSelectedAnnouncement: () => {},
  titleError: '',
  setTitleError: () => {},
  bodyError: '',
  setBodyError: () => {},
});

export const AnnoncementProvider = ({ children }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [announcements, setAnnouncements] = useState([]);
  const [edit, setEdit] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [bodyError, setBodyError] = useState(false);

  useEffect(() => {
    annoncementsFromServer()
      .then(setAnnouncements)
  }, [])

  const contextValue = {
    title,
    setTitle,
    body,
    setBody,
    announcements,
    setAnnouncements,
    edit,
    setEdit,
    selectedAnnouncement,
    setSelectedAnnouncement,
    titleError,
    setTitleError,
    bodyError,
    setBodyError,
  };

  return (
    <AnnoncementContext.Provider value={contextValue}>
      {children}
    </AnnoncementContext.Provider>
  )
}