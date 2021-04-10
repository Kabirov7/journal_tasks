import {
	InstantSearch,
	Hits,
	SearchBox,
	Pagination,
	Highlight,
	ClearRefinements,
	RefinementList,
	Configure,
} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch';
import Hit from "./Hit";
import {makeStyles} from "@material-ui/core";

const searchClient = algoliasearch('ELABUQVDZN', '486f9b7db86446b1cdce57f9e8004cd9');
const index = searchClient.initIndex('prod_JOURNAL_TASKS');


const useStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		margin: "0 auto",
		width: "90%",
		gridTemplateColumns: "1fr 1fr",

		textAlign: "left",
		['@media (max-width:780px)']: {
			gridTemplateColumns: "1fr",
		},
	},
	header: {
		margin: 0,
		padding: 0,
		fontFamily: "Roboto",
		fontWeight: 700,
		fontSize: 24,
		textTransform: "uppercase",
		['@media (max-width:780px)']: {
			fontSize: 22
		},
		['@media (max-width:500px)']: {
			fontSize: 20
		},
		['@media (max-width:350px)']: {
			fontSize: 19
		}
	}
}));
const MyInstantSearch = () => {
	const classes = useStyles()

	return (
		<InstantSearch searchClient={searchClient} indexName="prod_JOURNAL_TASKS">
			<div className={classes.container}>
				<div>
					<h2 className={classes.header}>case_stage_id</h2>
					<RefinementList attribute="case_stage_id"/>
				</div>
				<div>
					<h2 className={classes.header}>case_type</h2>
					<RefinementList attribute="case_type"/>
				</div>
			</div>
			<SearchBox/>
			<Hits hitComponent={Hit}/>
				<Pagination/>
		</InstantSearch>
	);
}

export default MyInstantSearch;