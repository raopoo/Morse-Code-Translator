
import { translateToEng } from "./translateToEng";

describe("Testing translateToEng()", () =>{

    it("Returns the alphabet when morse code is entered", () =>{
        expect(translateToEng(".-")).toEqual("A");
        expect(translateToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")).toEqual("HELLO WORLD");
        expect(translateToEng(".---- ..--- ...-- / ....- ..... -....")).toEqual("123 456");
    });

    it("Should throw an error if input is an empty string",()=>{
        expect(() => translateToEng("")).toThrow();
    });

    it("Should throw an error if input is not dots and dashes",()=>{
        expect(() => translateToEng("*")).toThrow();
        expect(() => translateToEng("?")).toThrow();
        expect(() => translateToEng("@")).toThrow();
    });

})