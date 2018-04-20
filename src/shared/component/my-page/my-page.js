import React, {Component} from 'react';
import {LeaveSummaryView} from '../leave/leave-summary-view.js';
import {connect} from 'react-redux';
import {updateLeaveSummary} from "../../redux/action/leave/leave-action";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class MyPage extends Component {

    componentWillMount() {
        this.props.dispatch(updateLeaveSummary(this.props.memberEmail));
    }

    render() {
        const {summary: {total, used, onProcess}} = this.props;

        return <div>
            <LeaveSummaryView total={total} used={used} onProcess={onProcess} />
            <Link to="/leave/application">
                <Button bsStyle="primary">신청</Button>
            </Link>
        </div>
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    const {member: {email}} = state;
    const {leaves: {summary}} = state;

    return {memberEmail: email, summary};
};

let ConnectedMyPage = connect(mapStateToProps)(MyPage);

export {ConnectedMyPage};

