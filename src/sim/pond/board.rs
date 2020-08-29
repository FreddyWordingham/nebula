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

// //  JS methods.
// #[wasm_bindgen]
// #[allow(clippy::missing_const_for_fn)]
// #[allow(clippy::missing_inline_in_public_items)]
// impl Board {}

impl Board {
    clone!(res, [usize; 2]);
    access!(cells, Array2<Cell>);

    /// Construct a new instance with a given board size.
    #[inline]
    #[must_use]
    fn new(res: [usize; 2]) -> Self {
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
