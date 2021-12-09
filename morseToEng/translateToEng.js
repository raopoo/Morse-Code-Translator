import morseToEng from "./morseToEng.js";

export const translateToEng = (string) =>{
    //alert("hello");

    if (string === "")
    throw new Error(
        "Please enter data to translate(dots and dashes)"
    );
    const morseArray = Object.keys(morseToEng);
    console.log(morseArray);
    const stringArry = string.split(" ");
    const charCheck = stringArry.map((e) => morseArray.includes(e));
    const arrCheck = charCheck.every((e) => e === true);
    console.log(arrCheck);
    if (!arrCheck) {
        alert("Please enter valid data");
        throw new Error("Data invalid");
    } else {
        //Translate
        const resultArr = stringArry
            .map((el) => {
                return morseToEng[el];
            })
            .join("");
        console.log(resultArr);
        return resultArr;
    }

}