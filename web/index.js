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
const reset_life_button = document.getElementById("reset_life_button");
const reset_hist_button = document.getElementById("reset_hist_button");

const time_button = document.getElementById("time_button");

const life_chance = document.getElementById("life_chance_range");


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

/// Update the board and then draw it.
function loop(timestamp) {
    board.tick_forward(1);

    draw_counts(ctx, width, height, board, memory);
    draw_cells(ctx, width, height, board, memory);
    // console.log("num alive: ", board.num_alive());

    frame_id = window.requestAnimationFrame(loop)
}


/// Rendering loop global variables.
let frame_id = null;

let width = 64;
let height = 64;
let board = setup_new_grid(width, height);
window.requestAnimationFrame(loop)



/// Buttons
/// Check if time is paused.
const is_paused = () => {
    return frame_id === null;
};

/// Start time.
const play = () => {
    time_button.textContent = "stop";
    render_loop();
};

/// Stop time.
const pause = () => {
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
});


/// Ranges.
life_chance.addEventListener("oninput", event => {
    console.log("hello");
});
