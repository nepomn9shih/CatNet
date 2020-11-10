import React from "react";
import classes from "./Users.module.css";

let Users = ({ users, follow, unfollow, setUsers }) => {
  
    if (users.length === 0) {
    setUsers([
    {
      id: 1,
      followed: true,
      fullName: "Sasha",
      status: "At home",
      location: { city: "Saint-Petersburg", country: "Russia" },
      avatar:
        "https://www.eastbaytimes.com/wp-content/uploads/2018/10/GettyImages-9015747841.jpg?w=620",
    },
    {
      id: 2,
      followed: false,
      fullName: "Misha",
      status: "Party",
      location: { city: "Moscow", country: "Russia" },
      avatar:
        "https://images2.minutemediacdn.com/image/upload/c_crop,h_1350,w_2400,x_0,y_303/f_auto,q_auto,w_1100/v1576269707/shape/mentalfloss/610356-gettyimages-1018078858.jpg",
    },
    {
      id: 3,
      followed: false,
      fullName: "Evgeniy",
      status: "Chilling",
      location: { city: "Moscow", country: "Russia" },
      avatar:
        "https://d885f4fd1763c7c53b88-b63a7d70fba6d58f32f6d8cf64fba882.ssl.cf1.rackcdn.com/Cats-1518-1.jpg",
    },
    {
      id: 4,
      followed: true,
      fullName: "Anna",
      status: "At work",
      location: { city: "Volgograd", country: "Russia" },
      avatar:
        "https://thumbs.dreamstime.com/b/oosterse-cat-big-ears-op-zwarte-ge%C3%AFsoleerde-achtergrond-96766870.jpg",
    },
  ])};

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <span>
              <div>
                <img
                  className={classes.avatar}
                  src={user.avatar}
                  alt="avatar"
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
