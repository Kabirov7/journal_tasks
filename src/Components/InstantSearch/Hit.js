import {makeStyles} from "@material-ui/core";
import JSONPretty from 'react-json-pretty';

const useStyles = makeStyles((theme) => ({
	link: {
		margin: 0,
		padding: "15px 0 5px 0 ",
		fontFamily: "Roboto",
		fontWeight: 300,
		fontSize: 20,
		textTransform: "uppercase",
		['@media (max-width:780px)']: {
			fontSize: 18
		},
		['@media (max-width:500px)']: {
			fontSize: 16
		},
		['@media (max-width:350px)']: {
			fontSize: 15
		}
	},
	preStyle: {
		display: 'block',
		margin: '0',
		overflow: 'scroll',
	},
}));


const Hit = (props) => {
	const classes = useStyles()
	const JSONPrettyMon = require('react-json-pretty/dist/monikai');
	const unnecessaryKeys = ["_highlightResult", "source"]
	let item = props.hit

	unnecessaryKeys.map(key => delete item[key])
	return (
		<div style={{paddingTop: 50, textAlign: "left"}}>
			<JSONPretty data={item} theme={JSONPrettyMon}></JSONPretty>
			<div className={classes.link}>
				<a target="_blank" href={"https://kloopmedia.github.io/Journal/#/t/" + item.objectID}>link</a>
			</div>
		</div>
	);
}

export default Hit