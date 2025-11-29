const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here
describe("Fantasy Character Server", () => {
    afterAll(() => {
        server.close();
    });

    function sendPostRequest (path, callback) {
        const options = {
            hostname: "localhost",
            port: 3000,
            path,
            method: "POST"
        };

        const req = http.request(options, res => callback(res));
        req.end();
    }

    // test one for first POST to create a character
    test("POST /create should create a character", done => {
        sendPostRequest("/create?class=Warrior&gender=Female&funFact=Preferred%20weapon%20is%20an%20axe", res => {
            let data = "";
            res.on("data", chunk => { data += chunk; });
            res.on("end", () => {
                const character = JSON.parse(data);
                expect(character).toEqual({
                    class: "Warrior",
                    gender: "Female",
                    funFact: "Preferred weapon is an axe"
                });
                done();
            });
        });
    });

    // test two for second POST to confirm character creation
    test("POST /confirm should confirm the character's creation", done => {
        sendPostRequest("/confirm", res => {
            let data = ""
            res.on("data", chunk => { data += chunk; });
            res.on("end", () => {
                const message = JSON.parse(data);
                expect(message).toEqual({ message: "Character successfully created" });
                done();
            });
        });
    });

    // test three to view character that's been created
    test("GET /view should return the character that was created", done => {
        http.get("http://localhost:3000/view", res => {
            let data = "";
            res.on("data", chunk => { data += chunk; });
            res.on("end", () => {
                const character = JSON.parse(data);
                expect(character.class).toBe("Warrior");
                expect(character.gender).toBe("Female");
                expect(character.funFact).toBe("Preferred weapon is an axe");
                done();
            });
        });
    });
});