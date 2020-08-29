//! Universal state.

use crate::{access, clone, pond::Cell, X, Y};
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

        Self::new_sized([width as usize, height as usize])
    }

    /// Count the number of living cells.
    #[must_use]
    pub fn occupation(&self) -> u32 {
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
