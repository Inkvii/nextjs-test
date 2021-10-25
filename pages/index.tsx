import ReactFlow, {isNode, Node, Position} from "react-flow-renderer"
import type {Elements} from "react-flow-renderer/dist/types"
import {useState} from "react"
import NodeComponent, {NodeData} from "component/NodeComponent"

const graphElements: Elements<NodeData> = [
	{
		id: "1",
		type: "custom", // input node
		data: {
			label: "Input Node",
			secondary: "This is such a description that might be easily recognisable. After all, who gives a node any text?"
		},
		position: {x: 50, y: 25},
		sourcePosition: Position.Right
	},
	// default node
	{
		id: "2",
		// you can also pass a React component as a label
		data: {
			label: "My label"
		},
		type: "input",
		position: {x: 450, y: 25},
		sourcePosition: Position.Right,
		targetPosition: Position.Left,
	},
	{
		id: "3",
		type: "output", // output node
		data: {label: "Output Node"},
		position: {x: 700, y: 325},
		sourcePosition: Position.Right,
		targetPosition: Position.Left
	},
	// animated edge
	{id: "e1-2", source: "1", target: "2", animated: true},
	{id: "e1b-2", source: "1", sourceHandle: "b", target: "3", animated: true},
	{id: "e2-3", source: "2", target: "3"},
]

const nodeTypes = {
	custom: NodeComponent
}

export default function Home() {
	const [elements, setElements] = useState<Elements>(graphElements)

	// @ts-ignore
	const onNodeClick = (node: Node<NodeData>) => {
		console.log(node)

		const newEl: Elements = elements.map(n => {
			if (n.id === node.id && isNode(n)) {
				n.type = "custom"
				console.log("Found node")
			}
			return n
		})
		setElements(newEl)
	}

	return (
		<div>
			<div>
				Home
			</div>
			<div style={{height: "500px"}} className={"border border-solid"}>
				<ReactFlow elements={elements} nodesDraggable={false} zoomOnScroll={true}
				           onElementClick={(event, element) => onNodeClick(element as Node<NodeData>)}
				           nodeTypes={nodeTypes}
				/>
			</div>
		</div>
	)
}
