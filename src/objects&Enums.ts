//Object and Enums in TypeScript
let player: {
    name: string;
    age?: number; /* to make any property optional */
    married: boolean | number;
    clubs?: string[]; /* to make any property optional */
    country: string;
}

player = {
    name: 'messi',
    age: 36,
    married: 1,
    clubs: ['barca', 'psg'],
    country: 'argentina'
}

player.age = player.age! + 5; /* to change any optional property value */
player.clubs = player.clubs?.map(club => club.toUpperCase()); /* to change any optional array property value */

/* ***************************************** */

enum friends { /* enum is a kind of object */
    ami,
    tumi,
    he,
    she
}
enum friends { /* a value could be assigned */
    Ami = 10,
    Tumi = 7,
    He = 2,
    She = 9
}

enum secrect { /* value can not be changed */
    API_Key = 'api key',
    Stripe_Key = 'st0458'
}