export let getMutualFriends = (user1, user2) => {
    let user1Friends = user1.getFriends();
    let user2Friends = user2.getFriends();
    let mutualFriends = [];
    user1Friends.forEach((friend) => {
      if (user2Friends.some((user2Friend) => user2Friend.id === friend.id)) {
        mutualFriends.push(friend);
      }
    });
    return mutualFriends;
  };
  
  export default ({ id = null, friends = [] } = {}) => ({
    friends,
    id,
    getFriends() {
      return this.friends.map((friend) => ({ ...friend })); 
    },
  });