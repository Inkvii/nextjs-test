import {MENU_ROUTES, Route} from "constant/Constants"
import Link from "next/link"
import {useRouter} from "next/router"

interface Props {
	className?: string
}

export default function Menu(props: Props) {

	const MenuItem = (props: { route: Route }) => {
		const router = useRouter()

		return (
			<div
				className={`px-4 py-1 hover:bg-blue-400 ${router.pathname === props.route.url ? "bg-gradient-to-r from-blue-400" : "bg-blue-300"}`}
				onClick={() => router.push(props.route.url)}>
				<Link href={props.route.url}>
					<p>{props.route.menuDescription}</p>
				</Link>
			</div>
		)
	}


	return (
		<div className={`bg-blue-300 ${props.className}`}>
			{Object.values(MENU_ROUTES).map(route => (
				<MenuItem key={route.menuDescription} route={route}/>
			))}
		</div>
	)
}
