//! Cell status implementation.

/// Cell status.
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
