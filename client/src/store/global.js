import { velX } from "velte"

export const THEME_TOGGLE = "themeToggle"

export const global = new velX({
    state: {
        isDark: false
    },
    actions:{
        [THEME_TOGGLE](context){
            context.commit(THEME_TOGGLE)
        }
    },
    mutations:{
        [THEME_TOGGLE](state){
            state.isDark = !state.isDark
            return state
        }
    }
})
