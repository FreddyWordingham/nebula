import {
    Board,
    Cell,
} from "museum";
import {
    memory
} from "museum/museum_bg";
import {
    CELL_SIZE,
    draw_cells,
    draw_counts,
    draw_grid
} from "./drawing";



/// Canvas id.
const canvas = document.getElementById("main_canvas");
/// Drawing context.
const ctx = canvas.getContext('2d');


/// Form ids.
const top_form = document.getElementById("top_form");
const reset_life_button = document.getElementById("reset_life_button");
const reset_hist_button = document.getElementById("reset_hist_button");
const life_chance = document.getElementById("life_chance_range");

const bottom_form = document.getElementById("bottom_form");
const time_button = document.getElementById("time_button");


/// Draw the grid array.
function setup_new_grid(width, height) {
    canvas.height = (CELL_SIZE + 1) * height + 1;
    canvas.width = (CELL_SIZE + 1) * width + 1;

    /// Main board.
    const board = Board.new(width, height);
    board.randomise(life_chance.value);

    draw_grid(ctx, width, height);
    // draw_cells(ctx, width, height, board, memory);
    console.log("num alive: ", board.num_alive());

    return board;
}

/// Main rendering function.
function render() {
    draw_counts(ctx, width, height, board, memory);
    draw_cells(ctx, width, height, board, memory);
}

/// Update the board and then draw it.
function loop(timestamp) {
    board.tick_forward(1);

    render();
    // console.log("num alive: ", board.num_alive());

    frame_id = window.requestAnimationFrame(loop)
}


/// Buttons
/// Check if time is paused.
function is_paused() {
    return frame_id === null;
};

/// Start time.
function play() {
    time_button.textContent = "pause ";
    window.requestAnimationFrame(loop)
};

/// Stop time.
function pause() {
    time_button.textContent = "start";
    cancelAnimationFrame(frame_id);
    frame_id = null;
};

/// Check for button click.
time_button.addEventListener("click", event => {
    if (is_paused()) {
        play();
    } else {
        pause();
    }
});


/// Reset button.
reset_life_button.addEventListener("click", event => {
    board.randomise(life_chance.value);
});

/// Reset history button.
reset_hist_button.addEventListener("click", event => {
    board.reset_count();
    console.log("no");
    render();
    console.log("excuses!");
});


/// Ranges.
life_chance.addEventListener("oninput", event => {
    console.log("hello");
});



/// Toggle the form visibility.
function toggle_forms() {
    console.log("Toggling")
    if (top_form.style.display == "block") {
        if (is_paused()) {
            play();
        }

        top_form.style.display = "none";
        bottom_form.style.display = "none";
    } else {
        if (!is_paused()) {
            pause();
        }

        top_form.style.display = "block";
        bottom_form.style.display = "block";
    }
}



/// Keypress.
document.body.onkeyup = function (e) {
    if (e.keyCode == 32) { // spacebar.
        if (is_paused()) {
            play();
        } else {
            pause();
        }
    } else if (e.keyCode == 27) { // escape.
        toggle_forms();
    }
}



/// Rendering loop global variables.
let frame_id = null;

let width = 64;
let height = 64;
let board = setup_new_grid(width, height);
window.requestAnimationFrame(loop);

top_form.style.display = "none";
bottom_form.style.display = "none";
