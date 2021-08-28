interface Props {
	name: string
}

export default function Messagebox(props: Props) {
	return (
		<div className={"shadow-md p-4 m-2 flex flex-col"}>
			<h1 className={"text-2xl mb-1 p-2"}>{props.name}</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aperiam quis. Consectetur cupiditate distinctio id nihil.
				Harum officia quo quos reprehenderit!</p>
		</div>
	)
}
