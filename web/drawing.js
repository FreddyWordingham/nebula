/// Drawn cell size.
export const CELL_SIZE = 10; // [px]
/// Grid colour.
const GRID_COL = "#CCCCCC";
/// Dead cell colour.
const DEAD_COL = "#0C3EF9FF";
/// Living cell colour.
const ALIVE_COL = "#ebe600ff";



/// Draw the grid array.
export function draw_grid(ctx, width, height) {
    ctx.beginPath();
    ctx.strokeStyle = GRID_COL;

    for (let j = 0; j <= height; ++j) {
        ctx.moveTo(0, (j * (CELL_SIZE + 1)) + 1);
        ctx.lineTo(((CELL_SIZE + 1) * width) + 1, (j * (CELL_SIZE + 1)) + 1);
    }
    for (let i = 0; i <= width; ++i) {
        ctx.moveTo((i * (CELL_SIZE + 1)) + 1, 0);
        ctx.lineTo((i * (CELL_SIZE + 1)) + 1, ((CELL_SIZE + 1) * height) + 1);
    }

    ctx.stroke();
}

/// Draw the cell array.
export function draw_cells(ctx, width, height, board, memory) {
    const cells_ptr = board.cells_ptr();
    const cells = new Uint8Array(memory.buffer, cells_ptr, (width * height));

    ctx.beginPath();

    for (let row = 0; row < height; ++row) {
        for (let col = 0; col < width; ++col) {
            const idx = (row * width) + col;

            ctx.fillStyle = cells[idx] == 0 ?
                DEAD_COL :
                ALIVE_COL;

            ctx.fillRect(
                (col * (CELL_SIZE + 1)) + 1,
                (row * (CELL_SIZE + 1)) + 1,
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }

    ctx.stroke();
}
