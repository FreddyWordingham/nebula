import {
    hsl,
    hsl_to_hex,
    rgb_to_hex,
    hsl_to_rgb,
} from "./colour";



/// Spacing between drawn cells.
export const CELL_SPACING = 1; // [px]
/// Spacing interior cell padding.
export const CELL_PADDING = 3; // [px]
/// Drawn cell size.
/// Note that CELL_SIZE > 2 * CELL_PADDING
/// Must be true.
export const CELL_SIZE = 10; // [px]
/// Grid colour.
const GRID_COL = "#CCCCCC";
/// Dead cell colour.
const DEAD_COL = "#000000";
/// Living cell colour.
const ALIVE_COL = "#ffffff";



/// Draw the cell array.
export function draw_cells(ctx, width, height, board, memory) {
    const cells_ptr = board.cells_ptr();
    const cells = new Uint8Array(memory.buffer, cells_ptr, (width * height));

    ctx.beginPath();

    ctx.fillStyle = ALIVE_COL;
    for (let row = 0; row < height; ++row) {
        for (let col = 0; col < width; ++col) {
            const idx = (row * width) + col;

            if (cells[idx] == 0) {
                continue;
            }

            ctx.fillRect(
                (col * (CELL_SIZE + CELL_SPACING)) + CELL_PADDING,
                (row * (CELL_SIZE + CELL_SPACING)) + CELL_PADDING,
                CELL_SIZE - (2 * CELL_PADDING),
                CELL_SIZE - (2 * CELL_PADDING)
            );
        }
    }

    ctx.stroke();
}

/// Draw the board count drawstory.
export function draw_counts(ctx, width, height, board, memory, speed, offset) {
    const count_ptr = board.count_ptr();
    const count = new Uint8Array(memory.buffer, count_ptr, (width * height));

    ctx.beginPath();

    for (let row = 0; row < height; ++row) {
        for (let col = 0; col < width; ++col) {
            const idx = (row * width) + col;

            let c = (((count[idx] % speed) / speed) + offset) % 1;
            let [r, g, b] = hsl_to_rgb(c, 0.5, 0.5);
            ctx.fillStyle = `rgb(
                    ${Math.floor(r)},
                    ${Math.floor(g)},
                    ${Math.floor(b)})`;

            ctx.fillRect(
                col * (CELL_SIZE + CELL_SPACING),
                row * (CELL_SIZE + CELL_SPACING),
                CELL_SIZE,
                CELL_SIZE
            );
        }
    }

    ctx.stroke();
}
