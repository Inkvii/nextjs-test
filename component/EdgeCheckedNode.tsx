import {Handle, Node, Position} from "react-flow-renderer"
import {useEffect, useState} from "react"

export interface EdgeCheckedNodeData {
	label: string,
	checked: boolean,
	className?: string
}

export default function EdgeCheckedNode(node: Node<EdgeCheckedNodeData>) {

	const [background, setBackground] = useState("")
	const [className, setClassName] = useState(node.data?.className)

	useEffect(() => {
		setBackground(node.data?.checked ? "bg-green-500" : "bg-blue-300")
	}, [node.data?.checked])

	useEffect(() => {
		console.log("Setting classname")
		setClassName(node.data?.className ?? "border-2 border-solid border-black")
	}, [node.data?.className])

	return (
		<div className={`rounded ${background} py-1 px-2 m-1 max-w-xs ${className}`}>
			<div className={"text-center text-md"}>
				{node.data?.label}
			</div>

			<Handle type="target" position={Position.Left} style={{borderRadius: 0}}/>
			<Handle type="source" position={Position.Right} style={{borderRadius: 0}}/>
		</div>
	)
}
