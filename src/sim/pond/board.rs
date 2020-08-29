//! Universal state.

use ndarray::Array2;
// use std::fmt::{Display, Formatter, Result};
use crate::pond::Cell;
use wasm_bindgen::prelude::*;

/// Game board.
#[wasm_bindgen]
pub struct Board {
    /// Board size.
    res: [u32; 2],
    /// Current state array.
    cells: Array2<Cell>,
}

// //  JS methods.
// #[wasm_bindgen]
// #[allow(clippy::missing_const_for_fn)]
// #[allow(clippy::missing_inline_in_public_items)]
// impl Board {}

impl Board {
    /// Construct a new instance with a given board size.
    #[inline]
    #[must_use]
    fn new(res: [u32; 2]) -> Self {
        crate::set_panic_hook(); // TODO: Better place for this?

        debug_assert!(res[0] > 0);
        debug_assert!(res[1] > 0);

        Self {
            res,
            cells: Array2::default([res[0] as usize, res[1] as usize]),
        }
    }
}

// impl Display for Board {
//     #[inline]
//     fn fmt(&self, f: &mut Formatter) -> Result {
//         for row in 0..self.res[1] {
//             for col in 0..self.res[0] {
//                 let symbol = if self.cells[self.get_index(row, col)] {
//                     '◼'
//                 } else {
//                     '◻'
//                 };
//                 write!(f, "{}", symbol)?;
//             }
//             writeln!(f)?;
//         }

//         Ok(())
//     }
// }
