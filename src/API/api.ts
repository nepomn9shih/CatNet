import { ProfileType } from "../types/types";
import Axios from "axios"

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

    followRequest(userId: number) {
       return axiosCreated.post(
            `follow/${userId}`).then(response => response.data);
    },

    unfollowRequest(userId: number) {
        return axiosCreated.delete(
            `follow/${userId}`).then(response => response.data);
    },
    
}

export const profileAPI = {
    getProfile(userId: number) {
        return axiosCreated.get(
            `profile/${userId}`
        ).then(response => response.data)
    },

    getStatus(userId: number) {
        return axiosCreated.get(
            `profile/status/${userId}`
        ).then(response => response.data)
    },

    updateStatus(status: string) {
        return axiosCreated.put(
            `profile/status`, {status: status}
        ).then(response => response.data)
    },

    savePhoto(photoFile: any) {
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

    saveProfile(profile: ProfileType) {
        return axiosCreated.put(
            `profile`, profile
        ).then(response => response.data)
    }
}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CapchaIsRequired = 10 
}

type GetMeResponseType = {
    data: {id: number, email: string, login: string }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {userId: number}
    resultCode: ResultCodesEnum
    messages: Array<string>
}

export const authAPI = {
    getMe() {
        return axiosCreated.get<GetMeResponseType>(
            `auth/me`
          ).then(response => response.data);
    },
 
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return axiosCreated.post<LoginResponseType>(
            `auth/login`, {email, password, rememberMe, captcha}
          ).then(response => response.data);
    },

    logout() {
        return axiosCreated.delete(
            `auth/login`
          ).then(response => response.data);
    },
}

export const securityAPI = {

    getCaptchaUrl() {
        return axiosCreated.get(
            `security/get-captcha-url`
          ).then(response => response.data);
    },
}