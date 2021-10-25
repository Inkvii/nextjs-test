export interface Route {
	menuDescription: string,
	url: string
}

export const MENU_ROUTES: { [keyof: string]: Route } = {
	home: {
		menuDescription: "Home page",
		url: "/"
	} as Route,
	about: {
		menuDescription: "About page",
		url: "/about"
	} as Route,
	items: {
		menuDescription: "All items",
		url: "/items"
	},
	predicate: {
		menuDescription: "Predicates",
		url: "/predicate"
	}
}
