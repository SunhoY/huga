import {get} from "../../aws-client/document-client";
import {getCallback} from "../../aws-client/callback";
import {leaveSummaryTransformer} from "../model/leave";

export const getLeaveSummary = (email) => {
    return new Promise((resolve, reject) => {
        get().get({
            TableName: 'leave_summary',
            Key: {ownerEmail: email}
        }, getCallback(resolve, reject, leaveSummaryTransformer))
    });
};