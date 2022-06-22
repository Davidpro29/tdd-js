let app = require("../src/app")

let supertest = require('supertest');
let request = supertest(app);

test("O express deve responder na porta 3131", () => {
    return request.get("/").then(res => expect(res.statusCode).toEqual(200));
});

test("Deve retornar cor azul como favorito", () => {
    return request.get("/cor/david").then(res => expect(res.body.cor).toEqual("azul"))
})