var newPolitician = function (name , electionResults , totalVotes) {
	var candidate = {};

	candidate.name = name;
	candidate.electionResults = electionResults;
	candidate.totalVotes = totalVotes;

	candidate.announce = function () {
		console.log(this.name + " is running for presidency!")
	}

	candidate.announce();
	
	return candidate;
};

var trump = newPolitician("Trump", 100 , 100000);
var biden = newPolitician("Biden", 110 , 120000);

console.log(trump);

