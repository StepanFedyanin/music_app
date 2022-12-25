const defaultState = {
	themes: "light",
	sidebar: true
}
const CHANGE_VIEW_THEMES = 'CHANGE_SETTING_THEMES';
const CHANGE_VIEW_SIDEBAR = 'CHANGE_VIEW_SIDEBAR';
export const ViewReducer = (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_VIEW_THEMES:
			return { ...state, themes: action.payload }
		case CHANGE_VIEW_SIDEBAR:
			return { ...state, sidebar: action.payload }
		default:
			return state
	}
}
export const changeViewSidebar = (payload) => { return { type: CHANGE_VIEW_SIDEBAR, payload } }
export const changeViewThemas = (payload) => { return { type: CHANGE_VIEW_THEMES, payload } }





