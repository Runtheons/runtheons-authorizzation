const AuthorizzationToken = require("./AuthorizzationToken");

module.exports = class Authorizzation {

    static NOT_LOGGED = new AuthorizzationToken({
        mustBeNotLogged: true
    });

    static LOGGED = new AuthorizzationToken({
        mustBeLogged: true
    });

    static LOGGED_AS_ATHLETE = new AuthorizzationToken({
        mustBeLogged: true,
        mustBeAthlete: true
    });

    static LOGGED_AS_COACH = new AuthorizzationToken({
        mustBeLogged: true,
        mustBeCoach: true
    });

    static LOGGED_AS_PROFESSIONAL = new AuthorizzationToken({
        mustBeLogged: true,
        mustBeProfessional: true
    });

    static merge(arr) {
        for (let i = 1; i < arr.length; i++) {
            Object.keys(arr[0]).forEach(k => {
                arr[0][k] = arr[0][k] && arr[i][k];
            })
        }
        return arr[0];
    }

    static execute(requiredToken, session) {
        return {
            status: true,
            errors: []
        }
    }

}