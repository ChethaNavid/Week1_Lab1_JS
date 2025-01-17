// Simulate a voting system for three candidates (A / B/ C). 
// Count vote and declare a winner

function countVote(votes) {
    let votesCountA = 0;
    let votesCountB = 0;
    let votesCountC = 0;

    if(votes.length == 0){
        console.log("There is no vote yet");
        return;
    }

    for(let i = 0; i < votes.length; i++) {
        if(votes[i] == 'A') {
            votesCountA++;
        } 
        if(votes[i] == 'B') {
            votesCountB++;
        } 
        if(votes[i] == 'C') {
            votesCountC++;
        } 
    }
    let maxVotes = Math.max(votesCountA, votesCountB, votesCountC);
    const winner = [];
    
    if(votesCountA == maxVotes) {
        winner.push('A');
    }
    if(votesCountB == maxVotes) {
        winner.push('B');
    }
    if(votesCountC == maxVotes) {
        winner.push('C');
    }

    if(winner.length == 1) {
        console.log(`${winner[0]} is the winner`);
    } else if(winner.length > 1 ) {
        console.log(`${winner.join(" and ")} is the winner`);
    }
    
}

let votes = ['A', 'B', 'C', 'C', 'B'];
countVote(votes);
votes = [];
countVote(votes);