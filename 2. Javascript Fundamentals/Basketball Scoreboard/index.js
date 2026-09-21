
let home = 0
let guest = 0

home_score = document.getElementById("home-score")
guest_score = document.getElementById("guest-score")

function incrementPoint(point, team) {
    if (team == "home") {
        home_score.textContent = Number(home_score.textContent) + point
        console.log("Action: clicked; team: home")
    }
    else {
        guest_score.textContent = Number(guest_score.textContent) + point
        console.log("Action: clicked; team: guest")
    }
}