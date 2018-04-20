import {get} from "../../aws-client/document-client";
import {getCallback, putCallback} from "../../aws-client/callback";
import base64 from 'base-64';

export const registerNewMember = (member) => {
    return new Promise((resolve, reject) => {
        get().put({
            TableName: 'member',
            Item: member,
            ConditionExpression: 'attribute_not_exists(email)'
        }, putCallback(resolve, reject));
    });
};

export const authenticate = (email, password) => {
    return new Promise((resolve, reject) => {
        get().get({
            TableName: 'member',
            Key: {email}
        }, getCallback(resolve, reject));
    });
};

export const createSession = (res, email, timeMillis) => {
    const source = `${email}|${timeMillis}`;

    const session = base64.encode(source);

    res.cookie("huga_session", session,{expires: 60000} );
};