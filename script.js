// create a literal object with a factory function that creates a political candidate
var newPolitician = function (name) {
	var candidate = {};

	candidate.name = name;
	candidate.electionResults = [];
	candidate.totalVotes = 0;

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


trump.countVotes();
biden.countVotes();

console.log(trump.electionResults);
console.log(biden.electionResults);

console.log("Trump " + trump.totalVotes);
console.log("Biden " + biden.totalVotes);


