import { defineStore } from "pinia"
import { reqLogin } from "@/api/user"
import type { loginForm, loginResponseData } from "@/api/user/type"
import type { userState } from "@/store/modules/types/type"
import { SET_TOKEN, GET_TOKEN } from "@/utils/token"
import { constRoute } from "@/router/routes"

let useUserStore = defineStore("User", {
  state: (): userState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constRoute
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      let res: loginResponseData = await reqLogin(data);
      if (res.code === 200) {
        this.token = res.data.token as string;
        // localStorage.setItem('token', (res.data.token as string))
        SET_TOKEN(res.data.token as string);
        return "ok";
      } else {
        return Promise.reject(new Error(res.data.message));
      }
    },
  },
  getters: {},
});

export default useUserStore;
