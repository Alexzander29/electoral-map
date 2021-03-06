// create a literal object with a factory function that creates a political candidate
var newPolitician = function (name) {
	var candidate = {};

	candidate.name = name;
	candidate.electionResults = [];
	candidate.totalVotes = 0;
	candidate.partyColor;

	candidate.countVotes = function () {
		for(i=0; i<this.electionResults.length;i++) {
			this.totalVotes = this.totalVotes + this.electionResults[i]; 
		}
	}

	candidate.announce = function () {
		console.log(this.name + " is running for presidency!")
	}

	candidate.announce();
	candidate.countVotes();

	return candidate;
};

var trump = newPolitician("Trump");
var biden = newPolitician("Biden");

trump.partyColor = [132,17,11];
biden.partyColor = [245,141,136];
//state votes
// = [
//9,3,11,6,55,9,7,33,29,16,4,4,20,11,6,6,8,8,4,10,11,16,10,6,10,3,5,6,4,14,5,29,15,3,18,7,7,20,4,9,3,11,38,6,3,13,12,5,10,3
//];
trump.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

biden.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1,];
//Recounted Votes..
trump.electionResults[9] = 1;
biden.electionResults[9] = 28;

trump.electionResults[4] = 17;
biden.electionResults[4] = 38;



trump.electionResults[43] = 11;
biden.electionResults[43] = 27;

//create a function for setting the state results

var setStateResults = function (state) {

	theStates[state].winner = null;

	if (trump.electionResults[state] > biden.electionResults[state]) {
		theStates[state].winner = trump;
	}
	else if (trump.electionResults[state] == biden.electionResults[state]) {
		console.log("Tie in in state of " + state + ".");
	}
	else {
		theStates[state].winner = biden;
	}

	var stateWinner = theStates[state].winner;
	if (stateWinner !== null) {
		theStates[state].rgbColor = stateWinner.partyColor;
	} 
	else {
	theStates[state].rgbColor = [148,2,211];
	}


	var stateTable = document.getElementById("stateResults");

	var header = stateTable.children[0].children[0];

	var stateName = header.children[0];

	stateName.innerText = theStates[state].nameFull;
	header.children[1].innerText = theStates[state].nameAbbrev;

	var stateInfoTable = document.getElementById('stateResults');
	var header = stateInfoTable.children[0];
	var body = stateInfoTable.children[1];
	var stateName = header.children[0].children[0];
	var abbrev = header.children[0].children[1];
	var candidate1Name = body.children[0].children[0];
	var candidate2Name = body.children[1].children[0];
	var candidate1Results = body.children[0].children[1];
	var candidate2Results = body.children[1].children[1];
	var winnersName = body.children[2].children[1];

	stateName.innerText = theStates[state].nameFull;
	abbrev.innerText = theStates[state].nameAbbrev;
	candidate1Name.innerText = trump.name;
	candidate2Name.innerText = biden.name;

	candidate1Results.innerText = trump.electionResults[state];
	candidate2Results.innerText = biden.electionResults[state];

	if (theStates[state].winner === null) {
		winnersName.innerText = "DRAW";
	}
	else {
		winnersName.innerText = theStates[state].winner.name;
	}


}
trump.countVotes();
biden.countVotes();



//console.log(trump.electionResults);
//console.log(biden.electionResults);

console.log("Trump " + trump.totalVotes);
console.log("Biden " + biden.totalVotes);


var winner;
//declarea  winner
if (trump.electionResults > biden.electionResults) {
	winner = trump.name
}
else if (trump.electionResults == biden.electionResults) {
	winner = null;
}
else {
	winner = biden.name;
}



var table = document.getElementById("countryResults");
var row = table.children[0].children[0];
row.children[0].innerText = trump.name;
row.children[1].innerText = trump.totalVotes;
row.children[2].innerText = biden.name;
row.children[3].innerText = biden.totalVotes;
row.children[5].innerText = winner;



//console.log(trump.color + biden.color);
