export const SET_TOKEN = (token: string) => {
    localStorage.setItem("token", token);
}

export const GET_TOKEN = (): string | null => {
    return localStorage.getItem("token")
}