import {
    Board,
    Cell,
} from "museum";
import {
    memory
} from "museum/museum_bg";
import {
    draw_cells,
    draw_grid,
    CELL_SIZE
} from "./drawing";



/// Canvas id.
const canvas = document.getElementById("main_canvas");
/// Drawing context.
const ctx = canvas.getContext('2d');



/// Draw the grid array.
function setup_new_grid(width, height) {
    canvas.height = (CELL_SIZE + 1) * height + 1;
    canvas.width = (CELL_SIZE + 1) * width + 1;

    /// Main board.
    const board = Board.new(width, height);
    board.randomise(0.5);

    draw_grid(ctx, width, height);
    draw_cells(ctx, width, height, board);
}

setup_new_grid(64, 64);
