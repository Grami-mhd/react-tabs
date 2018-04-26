/**
 * framework imports
 */
import React, {Component} from "react";
/**
 * plugins imports
 */
import { connect }                              from "react-redux";
import { ControlLabel, FormControl, FormGroup } from "react-bootstrap";
import { find, omit }                           from "lodash";
/**
 * project imports
 */
import List               from "./List"
import { filterCommands } from "../actions";

/**
 * map the redux store's state to props
 * @param state
 * @returns {{dataSets}}
 */
const mapStateToProps = state => {
    return {dataSets: state.dataSets.data};
};
/**
 * map the redux store's dispatchers to props
 * @param dispatch
 * @returns {{filterCommands: function(*=): *}}
 */
const mapDispatchToProps = dispatch => {
    return {
      filterCommands: filters => dispatch(filterCommands(filters))
    };
};

class IntentRecognitionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSet: props.dataSets.length ? props.dataSets[0].id : '',
            language: props.dataSets.length ? props.dataSets[0].languages.length ? props.dataSets[0].languages[0].code : "" : "",
            languages: props.dataSets.length ? props.dataSets[0].languages : []
        };
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * init the filter
     */
    componentWillMount() {
        this.props.filterCommands(omit(this.state, 'languages'));
    }

    /**
     * handle filter changes,
     * update local state
     * update filter in redux state
     * @param event
     */
    handleChange(event) {
        const newState = {[event.target.id]: event.target.value};
        if (event.target.id === "dataSet") {
           const selectedDataSet = find(this.props.dataSets, {'id': newState.dataSet});
           newState.language = selectedDataSet.languages.length ? selectedDataSet.languages[0].code : "";
           newState.languages = selectedDataSet.languages;
        }
        this.setState(
            newState,
            () => {
                this.props.filterCommands(omit(this.state, 'languages'));
            }
        );
    }

    render() {
        return (
            <div className="intent-recognition">
                <form>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <FormGroup controlId="dataSet" >
                                <ControlLabel>Select a data set</ControlLabel>
                                <FormControl
                                    onChange={this.handleChange}
                                    componentClass="select"
                                    placeholder="select a data set">
                                    {
                                        this.props.dataSets.map(dataSet => (
                                            <option key={dataSet.id} value={dataSet.id}>
                                                {dataSet.name}
                                            </option>
                                        ))
                                    }
                                </FormControl>
                            </FormGroup>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <FormGroup controlId="language" >
                                <ControlLabel>Select a Language</ControlLabel>
                                <FormControl
                                    onChange={this.handleChange}
                                    componentClass="select"
                                    value={this.state.language}
                                    placeholder="select a Language">
                                    {
                                        this.state.languages.map(language => (
                                            <option key={language.code} value={language.code}>
                                                {language.label}
                                            </option>
                                        ))
                                    }
                                </FormControl>
                            </FormGroup>
                        </div>
                    </div>
                </form>
                <div>
                    <List />
                </div>
            </div>
        );
    };
}

/**
 * connect react to redux
 */
const IntentRecognition = connect(mapStateToProps, mapDispatchToProps) (IntentRecognitionComponent);
export default IntentRecognition;
