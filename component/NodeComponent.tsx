import {Handle, Node, Position} from "react-flow-renderer"

export interface NodeData {
	label: string,
	secondary?: string,
	className?: string
}

// @ts-ignore
export default function NodeComponent(node: Node<NodeData>) {
	return (
		<div className={`border border-solid rounded border-black bg-blue-300 py-1 px-2 m-1 max-w-xs ${node.data?.className}`}>
			<div className={"text-center text-lg"}>
				{node.data?.label}
			</div>
			<hr className={"border-black"}/>
			<div className={"mt-1 text-sm"}>
				<p>{node.data?.secondary}</p>
			</div>

			<Handle type="target" position={Position.Left} style={{borderRadius: 0}}/>
			<Handle
				type="source"
				position={Position.Right}
				id="a"
				style={{top: '30%'}}
			/>
			<Handle
				type="source"
				position={Position.Right}
				id="b"
				style={{top: '70%'}}
			/>
		</div>
	)
}
