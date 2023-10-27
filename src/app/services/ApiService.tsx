
const users = [
  {id: "0", userName: "someName", followers: [1, 2], following: [2], rating: 4.1, wallpaper: `https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`, arts: [{id: 201, src:`https://picsum.photos/200/201`}, {id: 202, src:`https://picsum.photos/200/202`}]},
  {id: "1", userName: "someOtherName", followers: [0, 2], following: [2], rating: 3, wallpaper: `https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`, arts: [{id: 0, src: 'https://picsum.photos/200/209'}, {id: 1, src: 'https://picsum.photos/200/256'}]},
  {id: "2", userName: "otherOtherName", followers: [1], following: [0], rating: 5, wallpaper: `https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`, arts: [{id: 0, src: 'https://picsum.photos/200/209'}, {id: 1, src: 'https://picsum.photos/200/256'}]},
]

export const getUserById = (id : string) => {
  const user = users.find(user => user.id === id);
  return user;
}

export const getArts = () => {
  return Array.from({length: 40}).map((_, index) => {
    return {
      id: index,
      src:`https://picsum.photos/200/${Math.floor(
        Math.random() * (300 - 200 + 1) + 200
      )}`
    }
  });
}