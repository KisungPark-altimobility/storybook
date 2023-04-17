import React from "react";
declare const statusDotState: {
    readonly QUEUED: "This deployment is queued.";
    readonly BUILDING: "This deployment is building.";
    readonly READY: "This deployment is ready.";
    readonly ERROR: "This deployment had an error.";
    readonly CANCELED: "This deployment was canceled.";
    readonly INITIALIZING: "This deployment is initializing.";
    readonly UPLOADING: "This deployment is uploading.";
    readonly DEPLOYING: "This deployment is deploying.";
    readonly ARCHIVED: "This deployment is archived.";
};
export interface StatusDotProps {
    state: keyof typeof statusDotState;
    label?: boolean;
}
declare const StatusDot: React.FC<StatusDotProps>;
export default StatusDot;
