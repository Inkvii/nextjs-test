import ReactFlow, {Elements, isNode, Position} from "react-flow-renderer"
import {useState} from "react"
import dagre from "dagre"

const defaultPosition = {x: 0, y: 0}
const graphElements: Elements = [
	{
		id: '1',
		type: 'input',
		data: {label: 'input'},
		position: defaultPosition,
	},
	{
		id: '2',
		data: {label: 'node 2'},
		position: defaultPosition,
	},
	{
		id: '2a',
		data: {label: 'node 2a'},
		position: defaultPosition,
	},
	{
		id: '2b',
		data: {label: 'node 2b'},
		position: defaultPosition,
	},
	{
		id: '2c',
		data: {label: 'node 2c'},
		position: defaultPosition,
	},
	{
		id: '2d',
		data: {label: 'node 2d'},
		position: defaultPosition,
	},
	{
		id: '3',
		data: {label: 'node 3'},
		position: defaultPosition,
	},
	{
		id: '4',
		data: {label: 'node 4'},
		position: defaultPosition,
	},
	{
		id: '5',
		data: {label: 'node 5'},
		position: defaultPosition,
	},
	{
		id: '6',
		type: 'output',
		data: {label: 'output'},
		position: defaultPosition,
	},
	{id: '7', type: 'output', data: {label: 'output'}, position: defaultPosition},
	{id: 'e12', source: '1', target: '2', animated: true},
	{id: 'e13', source: '1', target: '3', animated: true},
	{id: 'e22a', source: '2', target: '2a', animated: true},
	{id: 'e22b', source: '2', target: '2b', animated: true},
	{id: 'e22c', source: '2', target: '2c', animated: true},
	{id: 'e2c2d', source: '2c', target: '2d', animated: true},
	{id: 'e32c', source: '3', target: '2c', animated: false},
	{id: 'e32a', source: '3', target: '2a', animated: false},
	{id: 'e45', source: '4', target: '5', animated: true},
	{id: 'e56', source: '5', target: '6', animated: true},
	{id: 'e57', source: '5', target: '7', animated: true},
]

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const width = 250
const height = 100

const getLayoutedElements = (elements: Elements) => {
	dagreGraph.setGraph({rankdir: "LR"})

	elements.forEach(el => {
		if (isNode(el)) {
			dagreGraph.setNode(el.id, {width: width, height: height})
		} else {
			dagreGraph.setEdge(el.source, el.target)
		}
	})

	dagre.layout(dagreGraph)

	return elements.map(el => {
		if (isNode(el)) {
			const nodeWithPosition = dagreGraph.node(el.id)
			el.targetPosition = Position.Left
			el.sourcePosition = Position.Right

			// some hack to notify react flow of the change
			el.position = {
				x: nodeWithPosition.x - width / 2 + Math.random() / 1000,
				y: nodeWithPosition.y - height / 2,
			}
		}
		return el
	})
}

export default function Layouted() {
	const [elements, setElements] = useState<Elements>(getLayoutedElements(graphElements))
	return (
		<div>
			<div>
				Layouted
			</div>
			<div style={{height: "500px"}} className={"border border-solid"}>
				<ReactFlow elements={elements} nodesDraggable={true} zoomOnScroll={true}/>
			</div>
		</div>
	)
}
