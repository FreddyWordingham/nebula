//! Library core.

#![warn(
    clippy::all,
    clippy::cargo,
    clippy::missing_docs_in_private_items,
    clippy::nursery,
    clippy::pedantic,
    clippy::restriction
)]
#![allow(
    clippy::as_conversions,
    clippy::cast_possible_truncation,
    clippy::cast_possible_wrap,
    clippy::cast_precision_loss,
    clippy::cast_sign_loss,
    clippy::else_if_without_else,
    clippy::float_arithmetic,
    clippy::implicit_return,
    clippy::indexing_slicing,
    clippy::integer_arithmetic,
    clippy::integer_division,
    clippy::modulo_arithmetic,
    clippy::multiple_inherent_impl,
    clippy::panic,
    clippy::print_stdout,
    clippy::unreachable,
    clippy::unwrap_used
)]

pub mod meta;
pub mod sim;
pub mod wasm;

pub use self::meta::*;
pub use self::sim::*;
pub use self::wasm::*;
