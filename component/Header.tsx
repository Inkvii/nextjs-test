interface Props {
	className?: string
}

export default function Header(props: Props) {
	return (
		<div className={`${props.className}`}>
			<div className={"flex flex-row bg-blue-500 p-2 justify-center"}>
				<p className={"text-lg text-white"}>This is a header</p>
			</div>
		</div>
	)
}
