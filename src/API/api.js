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

    followRequest(userId) {
       return axiosCreated.post(
            `follow/${userId}`).then(response => response.data);
    },

    unfollowRequest(userId) {
        return axiosCreated.delete(
            `follow/${userId}`).then(response => response.data);
    },
    
}

export const profileAPI = {
    getProfile(userId) {
        return axiosCreated.get(
            `profile/${userId}`
        ).then(response => response.data)
    },

    getStatus(userId) {
        return axiosCreated.get(
            `profile/status/${userId}`
        ).then(response => response.data)
    },

    updateStatus(status) {
        return axiosCreated.put(
            `profile/status`, {status: status}
        ).then(response => response.data)
    },

    savePhoto(photoFile) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return axiosCreated.put(
            `profile/photo`, formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data' 
                }
            }
        ).then(response => response.data)
    },

    saveProfile(profile) {
        return axiosCreated.put(
            `profile`, profile
        ).then(response => response.data)
    }
}

export const authAPI = {

    getMe() {
        return axiosCreated.get(
            `auth/me`
          ).then(response => response.data);
    },
 
    login(email, password, rememberMe = false) {
        return axiosCreated.post(
            `auth/login`, {email, password, rememberMe}
          ).then(response => response.data);
    },

    logout() {
        return axiosCreated.delete(
            `auth/login`
          ).then(response => response.data);
    },
}