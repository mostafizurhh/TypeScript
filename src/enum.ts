//ENUM Type
enum Rtype {
    SUCCESS,
    ERROR,
    FORBIDDEN,
    UNAUTHORIZED
}

interface APIRESPONSE<T> {
    status: number;
    Type: Rtype;
    data: T;
}

const RESPONSE: APIRESPONSE<object> = {
    status: 200,
    Type: Rtype.UNAUTHORIZED,
    data: {
        name: 'api',
        job: 'checking'
    }
}

console.log(RESPONSE);