import ReactJson from 'react-json-view'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	link: {
		margin: 0,
		padding: "15px 0 5px 0 ",
		fontFamily: "Roboto",
		fontWeight: 300,
		fontSize: 20,
		textTransform:"uppercase",
		['@media (max-width:780px)']: {
			fontSize: 18
		},
		['@media (max-width:500px)']: {
			fontSize: 16
		},
		['@media (max-width:350px)']: {
			fontSize: 15
		}
	}
}));

const Hit = (props) => {
	const classes = useStyles()
	const item = props.hit
  return (
    <div style={{paddingTop:50, textAlign: "left"}}>
			<ReactJson enableClipboard={true} displayObjectSize={true} sortKeys={true} src={item} />
			<div className={classes.link}>
			<a  target="_blank" href={"https://kloopmedia.github.io/Journal/#/t/" + item.objectID}>link</a>
    </div>
    </div>
  );
}

export default Hit