//! Required WASM bindings.

use wasm_bindgen::prelude::*;

/// Set the console error panic hook.
/// Required to be called once.

#[allow(dead_code)]
#[allow(clippy::missing_const_for_fn)]
#[inline]
pub fn set_panic_hook() {
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}

// Memory allocator was.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern "C" {
    /// Send an alert dialogue message.
    fn alert(s: &str);
}

// use js_sys;
// /// A macro to provide `println!(..)`-style syntax for `console.log` logging.
// macro_rules! log {
//     ( $( $t:tt )* ) => {
//         web_sys::console::log_1(&format!( $( $t )* ).into());
//     }
// }
