const URL = "https://mate.academy/students-api/posts";

export const annoncementsFromServer = () => {
  return fetch(URL).then(response => {
    // console.log(response.json())
    return response.json()
  });
};