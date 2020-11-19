const { default: Axios } = require("axios");

const axiosCreated = Axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "api-key": "9cf92053-f480-493b-a7cf-c3d9c728c87e"
      }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 20) {
        return axiosCreated.get(
          `users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data);
    },

    getUserData() {
        return axiosCreated.get(
            `auth/me`
          ).then(response => response.data);
    },

    getProfile(userId) {
        return axiosCreated.get(
            `profile/${userId}`
        ).then(response => response.data)
    },

    followRequest(userId) {
       return axiosCreated.post(
            `follow/${userId}`).then(response => response.data);
    },

    unfollowRequest(userId) {
        return axiosCreated.delete(
            `follow/${userId}`).then(response => response.data);
    },
    
}
