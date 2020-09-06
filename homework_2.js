const people = [{
    id: 0,
    name: 'Bob',
    age: 19,
    moneyAmount: 100,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 2,
}, {
    id: 1,
    name: 'Kate',
    age: 21,
    moneyAmount: 200,
    desiredAlcoholName: 'cognac',
    desiredAlcoholAmount: 7,
}, {
    id: 2,
    name: 'Jon',
    age: 18,
    moneyAmount: 50,
    desiredAlcoholName: 'martini',
    desiredAlcoholAmount: 3,

}, {
    id: 3,
    name: 'Ron',
    age: 24,
    moneyAmount: 110,
    desiredAlcoholName: 'wine',
    desiredAlcoholAmount: 5,
}, {
    id: 4,
    name: 'Georgi',
    age: 17,
    moneyAmount: 90,
    desiredAlcoholName: 'beer',
    desiredAlcoholAmount: 6,
}];


const alcoholPriceForOneItem = {
    whisky: 23,
    beer: 25,
    wine: 18,
    martini: 30,
    cognac: 20,
};
console.log(alcoholPriceForOneItem)
const LEGAL_AGE = 18;
console.log(LEGAL_AGE)

/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */
function getLegalAgePeople(arr, ageParamName) {
    return arr.filter(function(arrItem) {
        return arrItem[ageParamName] >= 18;
    });
}
const legalAgePeople = getLegalAgePeople(people, "age");
console.log(legalAgePeople)

/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method or for()
 */

function getPeopleWhoHaveMoneyForAlcohol(arr) {
    // WRITE CODE HERE
    return arr.filter(function(w) {
        return w.moneyAmount > alcoholPriceForOneItem[w.desiredAlcoholName] * w.desiredAlcoholAmount;
    });
}

const peopleWhoHaveMoneyForAlcohol = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
console.log(peopleWhoHaveMoneyForAlcohol)


/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method or for()
 */
function buyAlcohole(arr) {
    // WRITE CODE HERE
    return arr.map(function(r) {
        return (r.name + r.desiredAlcoholAmount + r.desiredAlcoholName + alcoholPriceForOneItem[r.desiredAlcoholName] * r.desiredAlcoholAmount)
    })
}
const buyAlcohol = buyAlcohole(legalAgePeople);
console.log(buyAlcohol)

// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];

        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);

        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}