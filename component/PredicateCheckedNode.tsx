import {Handle, Node, Position} from "react-flow-renderer"
import {useEffect, useState} from "react"

export interface PredicateNodeData {
	label: string,
	predecessors: string[],
	checked: boolean,
	className?: string
}

export default function PredicateCheckedNode(node: Node<PredicateNodeData>) {

	const [background, setBackground] = useState("")

	useEffect(() => {
		setBackground(node.data?.checked ? "bg-green-500" : "bg-blue-300")
	}, [node.data?.checked])

	return (
		<div className={`border border-solid rounded border-black ${background} py-1 px-2 m-1 max-w-xs ${node.data?.className}`}>
			<div className={"text-center text-md"}>
				{node.data?.label}
			</div>
			<div className={"px-4"}>
				<ul className={"list-disc text-xs"}>
					{node.data?.predecessors.map((n, index) => <li key={index}>Predecessor: {n}</li>)}
				</ul>
			</div>

			<Handle type="target" position={Position.Left} style={{borderRadius: 0}}/>
			<Handle type="source" position={Position.Right} style={{borderRadius: 0}}/>
		</div>
	)
}
