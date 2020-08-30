import {
    Board,
    Cell,
} from "museum";
import {
    memory
} from "museum/museum_bg";
import {
    CELL_SIZE,
    CELL_SPACING,
    draw_cells,
    draw_counts
} from "./drawing";



//  == HANDLES ==
/// Canvas id.
const canvas = document.getElementById("main_canvas");
/// Drawing context.
const ctx = canvas.getContext('2d');


/// Form ids.
const top_form = document.getElementById("top_form");
const reset_hist_button = document.getElementById("reset_hist_button");
const life_chance = document.getElementById("life_chance_range");

const bottom_form = document.getElementById("bottom_form");
const time_button = document.getElementById("time_button");
const randomise_button = document.getElementById("randomise_button");



//  == GLOBALS ==
let frame_id = null;



//  == FUNCTIONS ==
//  -- UI --
/// Toggle the form visibility.
function toggle_forms() {
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

//  -- Rendering --
/// Render control.
function render() {
    draw_counts(ctx, width, height, board, memory);
    draw_cells(ctx, width, height, board, memory);
    // console.log("num alive: ", board.num_alive());
}


//  -- Setup --
/// Construct a new grid instance.
function setup_new_grid(width, height) {
    canvas.height = ((CELL_SIZE + CELL_SPACING) * height) - CELL_SPACING;
    canvas.width = ((CELL_SIZE + CELL_SPACING) * width) - CELL_SPACING;

    let board = Board.new(width, height);
    board.randomise(life_chance.value);

    return board;
}


//  -- Time Control --
/// Check if time is paused.
function is_paused() {
    return frame_id === null;
};

/// Start time.
function play() {
    time_button.textContent = "pause";
    window.requestAnimationFrame(loop)
};

/// Stop time.
function pause() {
    time_button.textContent = "start";
    cancelAnimationFrame(frame_id);
    frame_id = null;
};

/// Update the board and then draw it.
function loop(timestamp) {
    board.tick_forward(1);

    render();

    frame_id = window.requestAnimationFrame(loop)
}



//  == LISTENERS ==
/// Life chance fraction.
life_chance_range.addEventListener("change", event => {
    board.randomise(life_chance.value);
    render();
});

/// Reset history button.
reset_hist_button.addEventListener("click", event => {
    board.reset_count();
    render();
});

/// Check for time button click.
time_button.addEventListener("click", event => {
    if (is_paused()) {
        play();
    } else {
        pause();
    }
});

/// Check for randomise button click.
randomise_button.addEventListener("click", event => {
    board.randomise(life_chance.value);
    render();
});

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
    } else if (e.keyCode == 82) { // 'r'.
        board.randomise(life_chance.value);
        render();
    }
}



//  == START ==
let width = 64;
let height = 64;
let board = setup_new_grid(width, height);
window.requestAnimationFrame(loop);

top_form.style.display = "none";
bottom_form.style.display = "none";
