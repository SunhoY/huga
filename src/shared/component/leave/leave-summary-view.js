import React from "react";

export const LeaveSummaryView = ({total, used, onProcess}) => {
    return <div>
        <h1>총 휴가: {total}</h1>
        <h1>사용: {used}</h1>
        <h1>결재중: {onProcess}</h1>
        <h1>잔여: {total - used}</h1>
    </div>

};