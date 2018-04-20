import {DynamoDB} from 'aws-sdk';
import {credential} from "../../credentials";

export const get = () => {
    return new DynamoDB.DocumentClient({region:'ap-northeast-2', ...credential});
};