//! Cell status implementation.

use std::fmt::{Display, Formatter, Result};

/// Cell status.
#[derive(Clone, Copy)]
pub enum Cell {
    /// Dead cell.
    Dead = 0,
    /// Living cell.
    Alive = 1,
}

impl Cell {
    /// Toggle the status of the cell.
    #[inline]
    pub fn toggle(&mut self) {
        *self = match *self {
            Self::Dead => Self::Alive,
            Self::Alive => Self::Dead,
        };
    }
}

impl Default for Cell {
    #[inline]
    fn default() -> Self {
        Self::Dead
    }
}

impl Display for Cell {
    #[inline]
    fn fmt(&self, f: &mut Formatter) -> Result {
        let symbol = match self {
            Self::Dead => "   ",
            Self::Alive => "[ ]",
        };

        write!(f, "{}", symbol)
    }
}
