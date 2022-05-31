function UsersListItem({ userMap }) {
  return (
    <li className={userMap.gender === "male" ? "bg-blue" : "bg-pink"}>
      <img src={userMap.picture.large} alt="Ritthy Ryan" />
      <h3>{userMap.name.first + " " + userMap.name.last}</h3>
      <p>{userMap.email}</p>
    </li>
  );
}

export default UsersListItem;
