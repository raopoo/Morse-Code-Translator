import { translateToMorse } from "./translateToMorse.js";

describe("Testing translateToMorse()", () =>{
    it("Returns morse code when alphabets or numbers are entered", () =>{
        expect(translateToMorse("Hello")).toEqual(".... . .-.. .-.. ---");
        expect(translateToMorse("12345")).toEqual(".---- ..--- ...-- ....- .....");
        expect(translateToMorse("a")).toEqual(".-");
        expect(translateToMorse("A")).toEqual(".-");
        expect(translateToMorse("10")).toEqual(".---- -----");
        expect(translateToMorse("How are you")).toEqual(".... --- .-- / .- .-. . / -.-- --- ..-");
    });

    it("Should throw an error if input is an empty string",()=>{
        expect(() => translateToMorse("")).toThrow();
    });

    it("Should throw an error if input is not alphabets, numbers and spaces",()=>{
        expect(() => translateToMorse("*")).toThrow();
        expect(() => translateToMorse("?")).toThrow();
        expect(() => translateToMorse("@")).toThrow();
    });
})