export declare class MonobankError extends Error {
    code: string;
    description: string;
    data?: any;
    constructor(code: string, description: string, data?: any);
}
