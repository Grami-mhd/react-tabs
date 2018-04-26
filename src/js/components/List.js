/**
 * framework imports
 */
import React from "react";
/**
 * plugin imports
 */
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { commands: state.commands.data };
};

const ConnectedList = ({ commands }) => (
    <div className="row commands-list">
        {commands.map(command => (
            <div className="col-md-4 col-xs-12 col-sm-6"  key={command.id}>
                <div className="command bg-info text-white"> {command.name}</div>
            </div>
        ))}
    </div>
);
const List = connect(mapStateToProps)(ConnectedList);

export default List;