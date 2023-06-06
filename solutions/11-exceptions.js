export class ParseError extends Error {
    constructor(message) {
        super(message);
        this.name = "ParseError";
    }
}

export function parseJson(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch(error) {
        throw new ParseError("Parse Error");
    }
}

export default { ParseError, parseJson };