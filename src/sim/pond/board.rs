//! Universal state.

use crate::{access, clone, log, pond::Cell, X, Y};
use ndarray::Array2;
use std::fmt::{Display, Formatter, Result};
use wasm_bindgen::prelude::*;

/// Game board.
#[wasm_bindgen]
pub struct Board {
    /// Board size.
    res: [usize; 2],
    /// Current state array.
    cells: Array2<Cell>,
}

//  JS methods.
#[wasm_bindgen]
#[allow(clippy::missing_const_for_fn)]
#[allow(clippy::missing_inline_in_public_items)]
impl Board {
    /// Construct a new instance.
    #[must_use]
    pub fn new(width: u32, height: u32) -> Self {
        debug_assert!(width > 0);
        debug_assert!(height > 0);

        log!("Creating board: {}x{}", width, height);

        Self::new_sized([width as usize, height as usize])
    }

    /// Count the number of living cells.
    #[must_use]
    pub fn num_alive(&self) -> u32 {
        self.cells.iter().fold(0, |alive, cell| match cell {
            Cell::Dead { .. } => alive + 1,
            _ => alive,
        })
    }
}

impl Board {
    clone!(res, [usize; 2]);
    access!(cells, Array2<Cell>);

    /// Construct a new instance with a given board size.
    #[inline]
    #[must_use]
    fn new_sized(res: [usize; 2]) -> Self {
        crate::set_panic_hook(); // TODO: Better place for this?

        debug_assert!(res[X] > 0);
        debug_assert!(res[Y] > 0);

        Self {
            res,
            cells: Array2::default([res[X], res[Y]]),
        }
    }

    /// Calculate the number of neighbours a given cell has.
    #[inline]
    #[must_use]
    fn num_neighbours(&self, index: [usize; 2]) -> u8 {
        let mut count = 0;

        let [row, col] = index;
        let top = if row == 0 { self.res[Y] - 1 } else { row - 1 };
        let bottom = if row == (self.res[Y] - 1) { 0 } else { row + 1 };
        let left = if col == 0 { self.res[X] - 1 } else { col - 1 };
        let right = if col == (self.res[X] - 1) { 0 } else { col + 1 };

        count += self.cells[(top, left)] as u8
            + self.cells[(top, col)] as u8
            + self.cells[(top, right)] as u8
            + self.cells[(row, left)] as u8
            + self.cells[(row, right)] as u8
            + self.cells[(bottom, left)] as u8
            + self.cells[(bottom, col)] as u8
            + self.cells[(bottom, right)] as u8;

        count
    }
}

impl Display for Board {
    #[inline]
    fn fmt(&self, f: &mut Formatter) -> Result {
        for yi in 0..self.res[Y] {
            for xi in 0..self.res[X] {
                write!(f, "{}", self.cells[[xi, yi]])?;
            }
            writeln!(f)?;
        }

        Ok(())
    }
}
