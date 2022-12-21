var img_guard = document.createElement("img");
img_guard.src = "https://png.pngitem.com/pimgs/s/101-1010641_download-svg-download-png-police-officer-emoji-transparent.png";
img_guard.setAttribute("width", "60px");
img_guard.setAttribute("height", "55px");

var img_player = document.createElement("img");
img_player.src = "https://cdn-icons-png.flaticon.com/512/2061/2061482.png"
img_player.setAttribute("width", "60px");
img_player.setAttribute("height", "60px");

var img_exit = document.createElement("img");
img_exit.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_XzFI9L5s7frNaOJz-4v5_T1EYl2G_J-ri-ngBbYOd1GFiTzMhRs1MHhhEClA2qYx8cI&usqp=CAU"
img_exit.setAttribute("width", "60px");
img_exit.setAttribute("height", "60px");

const LEVELS = [
    {
        "exit": [5, 1],
        "player": [4, 3],
        "guard": [3, 0],
        "walls": [
            [[0, 1], [1, 1]],
            [[1, 0], [1, 1]],
            [[1, 1], [1, 2]],
            [[1, 2], [2, 2]],
            [[2, 1], [2, 2]],
            [[1, 3], [2, 3]],
            [[2, 3], [3, 3]],
            [[3, 2], [3, 3]],
            [[3, 0], [3, 1]],
            [[3, 1], [4, 1]],
            [[4, 3], [4, 4]],
            [[4, 0], [5, 0]],
            [[4, 2], [5, 2]],
            [[4, 3], [5, 3]],
            [[4, 4], [5, 4]]
        ]
    },
    {
        "exit": [0, 1],
        "player": [1, 3],
        "guard": [2, 0],
        "walls": [
            [[1, 1], [2, 1]],
            [[1, 3], [1, 4]],
            [[2, 0], [2, 1]],
            [[2, 2], [2, 3]],
            [[2, 3], [3, 3]],
            [[3, 3], [4, 3]],
            [[3, 2], [4, 2]],
            [[4, 1], [5, 1]],
            [[3, 1], [3, 2]],
            [[4, 0], [4, 1]],
            [[4, 1], [4, 2]],
            [[0, 0], [1, 0]],
            [[0, 2], [1, 2]],
            [[0, 3], [1, 3]],
            [[0, 4], [1, 4]],
            [[2, 1], [3, 1]]
        ],
    },
]

var CURRENT_LEVEL = 0;

const place = (pos, img) => {
    var [row, col] = pos;
    var id = row*5 + col + 1 + CURRENT_LEVEL*30;
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).appendChild(img);
}

const placeGuard = (pos) => {
    place(pos, img_guard);
}

const placePlayer = (pos) => {
    place(pos, img_player);
}

const update = () => {
    place(exit, img_exit);
    placePlayer(player);
    placeGuard(guard);
}

const in_walls = (player, new_sq) => {
    for (var i = 0; i < walls.length; i++) {
        if (arraysEqual(walls[i][0], player) && arraysEqual(walls[i][1], new_sq)) {
            return true;
        }
        if (arraysEqual(walls[i][1], player) && arraysEqual(walls[i][0], new_sq)) {
            return true;
        }
    }
    return false;
}

const computerMove = () => {
    // try to go on the same row as player
    var rdist = player[0] - guard[0];
    var cdist = player[1] - guard[1];
    var moves = 0;
    if (rdist > 0) {
        var new_square = [guard[0]+1, guard[1]];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[0] += 1;
            moves++;
        }
        rdist--;
    }
    if (moves == 2) return;
    if (rdist > 0) {
        var new_square = [guard[0]+1, guard[1]];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[0] += 1;
            moves++;
        }
    }
    if (moves == 2) return;
    if (rdist < 0) {
        var new_square = [guard[0]-1, guard[1]];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[0] -= 1;
            moves++;
        }
        rdist++;
    }
    if (moves == 2) return;
    if (rdist < 0) {
        var new_square = [guard[0]-1, guard[1]];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[0] -= 1;
            moves++;
        }
    }
    if (moves == 2) return;
    if (cdist > 0) {
        var new_square = [guard[0], guard[1]+1];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[1] += 1;
            moves++;
        }
        cdist--;
    }
    if (moves == 2) return;
    if (cdist > 0) {
        var new_square = [guard[0], guard[1]+1];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[1] += 1;
            moves++;
        }
    }
    if (moves == 2) return;
    if (cdist < 0) {
        var new_square = [guard[0], guard[1]-1];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[1] -= 1;
            moves++;
        }
        cdist++;
    }
    if (moves == 2) return;
    if (cdist < 0) {
        var new_square = [guard[0], guard[1]-1];
        if (guard[0] < 5 && !in_walls(guard, new_square)) {
            guard[1] -= 1;
            moves++;
        }
    }
}

const loadLevel = () => {
    [exit, player, guard, walls] = [LEVELS[CURRENT_LEVEL].exit.slice(), LEVELS[CURRENT_LEVEL].player.slice(), LEVELS[CURRENT_LEVEL].guard.slice(), LEVELS[CURRENT_LEVEL].walls.slice()];
    document.getElementById("level"+(CURRENT_LEVEL ? 1 : 2)).classList.add("hidden");
    document.getElementById("level"+(CURRENT_LEVEL ? 2 : 1)).classList.remove("hidden");
    update();
}

function arraysEqual(a, b) {
  if (a === b) return true;
  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

var [exit, player, guard, walls] = [LEVELS[CURRENT_LEVEL].exit.slice(), LEVELS[CURRENT_LEVEL].player.slice(), LEVELS[CURRENT_LEVEL].guard.slice(), LEVELS[CURRENT_LEVEL].walls.slice()];
placeGuard(guard);
placePlayer(player);
place(exit, img_exit);

this.addEventListener('keydown', event => {
    console.log(player);
    console.log(guard);
    if (event.key == "1") {
        CURRENT_LEVEL = 0;
        loadLevel();
    } else if (event.key == "2") {
        CURRENT_LEVEL = 1;
        loadLevel();
    } else {
        var moved = false;
        var new_square = [];
        if (event.key == 'ArrowRight') {
            new_square = [player[0], player[1]+1];
            if (player[1] < 4 && !in_walls(player, new_square)) {
                player[1] += 1;
                moved = true;
            }
        } else if (event.key == 'ArrowLeft') {
            new_square = [player[0], player[1]-1];
            if (player[1] > 0 && !in_walls(player, new_square)) {
                player[1] -= 1;
                moved = true;
            }
        } else if (event.key == 'ArrowUp') {
            new_square = [player[0]-1, player[1]];
            if (player[0] > 0 && !in_walls(player, new_square)) {
                player[0] -= 1;
                moved = true;
            }
        } else if (event.key == 'ArrowDown') {
            new_square = [player[0]+1, player[1]];
            if (player[1] < 5 && !in_walls(player, new_square)) {
                player[0] += 1;
                moved = true;
            }
        }
        if (moved) {
            update();
            setTimeout(() => {
                if (arraysEqual(player, exit)) {
                    alert("You won!");
                    loadLevel(CURRENT_LEVEL ? 0 : 1);
                }
            }, 1000);
            computerMove();
            update();
            setTimeout(() => {
                if (arraysEqual(player, guard)) {
                    alert("You lost!");
                    loadLevel(CURRENT_LEVEL);
                }
            }, 1000);
        }
    }
})
