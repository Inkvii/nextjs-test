import ReactFlow, {Node, Position} from "react-flow-renderer"
import PredicateCheckedNode, {PredicateNodeData} from "component/PredicateCheckedNode"
import {Elements} from "react-flow-renderer/dist/types"
import {useState} from "react"

const nodeTypes = {
	custom: PredicateCheckedNode
}

const graphElements: Elements<PredicateNodeData> = [
	{
		id: "1",
		type: "custom",
		data: {
			label: "1 node",
			checked: false,
			predecessors: []
		},
		position: {x: 50, y: 25},
		sourcePosition: Position.Right
	},
	// default node
	{
		id: "2",
		// you can also pass a React component as a label
		data: {
			label: "2 node",
			checked: false,
			predecessors: ["1"]
		},
		type: "custom",
		position: {x: 300, y: 25},
		sourcePosition: Position.Right,
		targetPosition: Position.Left,
	},
	{
		id: "3",
		// you can also pass a React component as a label
		data: {
			label: "3 node",
			checked: false,
			predecessors: ["1"]
		},
		type: "custom",
		position: {x: 450, y: 200},
		sourcePosition: Position.Right,
		targetPosition: Position.Left,
	},
	{
		id: "4",
		// you can also pass a React component as a label
		data: {
			label: "4 node",
			checked: false,
			predecessors: ["2", "3"]
		},
		type: "custom",
		position: {x: 600, y: 100},
		sourcePosition: Position.Right,
		targetPosition: Position.Left,
	},
	// animated edge
	{id: "e1-2", source: "1", target: "2"},
	{id: "e2-3", source: "2", target: "3"},
	{id: "e2-4", source: "2", target: "4"},
	{id: "e1-3", source: "1", target: "3"},
	{id: "e3-4", source: "3", target: "4"},
]


export default function Predicate() {

	const [elements, setElements] = useState<Elements>(graphElements)


	const onNodeClick = (node: Node<PredicateNodeData>) => {
		console.log(node)
		const uncheckedNodes = node.data?.predecessors.filter(n => elements.find(soughtNode => soughtNode.id === n)?.data?.checked === false) ?? []
		console.log("UncheckedNodes size: " + uncheckedNodes?.length)

		if (uncheckedNodes.length > 0 || node.data === undefined) {
			console.log("Cannot check node")
			return
		}

		const newEl = elements.map(n => {
			if (n.id === node.id) {
				n.data.checked = !n.data.checked
				return n
			}
			return n
		})
		setElements(newEl)
	}

	return (
		<div>
			<div>
				Predicates
			</div>

			<div style={{height: "500px"}} className={"border border-solid"}>
				<ReactFlow elements={elements} nodesDraggable={false} zoomOnScroll={true}
				           onElementClick={(event, element) => onNodeClick(element as Node<PredicateNodeData>)}
				           nodeTypes={nodeTypes}
				/>
			</div>
		</div>
	)
}
