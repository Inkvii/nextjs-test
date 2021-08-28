import Messagebox from "component/Messagebox"

export default function Items() {

	return (
		<div>
			<p className={"mb-4"}>Items:</p>
			{
				[...Array(100)].map((x, i) => <Messagebox name={"Header " + i} key={i}/>)
			}
		</div>
	)
}
