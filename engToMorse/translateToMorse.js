import engToMorse from "./engToMorse.js";

export const translateToMorse = (string) => {

    if (string === "")
        throw new Error(
            "Please enter data to translate(Numbers and alphabets)"
        );

    //new array with all the keys from data object
    const engArray = Object.keys(engToMorse);
    //console.log(engArray);
    const stringArry = string.toUpperCase().split("");
    //console.log(stringArry);
    const charCheck = stringArry.map((e) => engArray.includes(e));
    const arrCheck = charCheck.every((e) => e === true);
    //console.log(arrCheck);

    if (!arrCheck) {
        alert("Translator accepts only numbers and alphabets");
        throw new Error("Translator accepts only numbers and alphabets");
    } else {
        //Translate
        const resultArr = stringArry
            .map((el) => {
                return engToMorse[el];
            })
            .join(" ");
        //console.log(resultArr);
        return resultArr;
    }
};
