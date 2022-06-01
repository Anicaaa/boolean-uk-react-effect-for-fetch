//Components
import UsersListItem from "./UsersListItem";

function UsersList({ user }) {
  return (
    <div className="scroll-container">
      <ul className="users-list">
        {user.map((userMap, index) => {
          return <UsersListItem userMap={userMap} key={index} />;
        })}
      </ul>
    </div>
  );
}

export default UsersList;
