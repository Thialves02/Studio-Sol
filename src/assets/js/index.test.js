/**
 * @jest-environment jsdom
 */
const {
  numZero,
  numUm,
  numDois,
  numTres,
  numQuatro,
  numCinco,
  numSeis,
  numSete,
  numOito,
  numNove,
  validaNumeroAleatorio,
  requisicaoAPI
} = require("./index");

describe("Números segmentados", () => {
  it("Número zero", () => {
    expect(numZero()).toStrictEqual(["a", "b", "c", "d", "e", "f", "e"]);
  });
  it("Número um", () => {
    expect(numUm()).toStrictEqual(["b", "c"]);
  });
  it("Número dois", () => {
    expect(numDois()).toStrictEqual(["a", "b", "g", "e", "d"]);
  });
  it("Número três", () => {
    expect(numTres()).toStrictEqual(["a", "b", "g", "c", "d"]);
  });
  it("Número quatro", () => {
    expect(numQuatro()).toStrictEqual(["f", "g", "b", "c"]);
  });
  it("Número cinco", () => {
    expect(numCinco()).toStrictEqual(["a", "f", "g", "c", "d"]);
  });
  it("Número seis", () => {
    expect(numSeis()).toStrictEqual(["a", "f", "g", "e", "d", "c"]);
  });
  it("Número sete", () => {
    expect(numSete()).toStrictEqual(["a", "b", "c"]);
  });
  it("Número oito", () => {
    expect(numOito()).toStrictEqual(["a", "b", "g", "c", "d", "f", "e"]);
  });
  it("Número nove", () => {
    expect(numNove()).toStrictEqual(["a", "b", "g", "c", "d", "f"]);
  });
});

describe("Retorno do número aleatório", () => {
  it("Valida se é erro ou número aleatório", () => {
    const req = {"value":300}
    expect(validaNumeroAleatorio(req)).toBe(300);
  });
  it("Valida se é erro ou número aleatório", async () => {
    
    const req = await requisicaoAPI()
    expect(req.value).toBe(300);
  });
});
