<p align="center">
  <img src="github_banner.jpg" alt="Oracle Engine" />
</p>

[![Foundry](https://github.com/d2foundry/oracle_engine/actions/workflows/foundry.yml/badge.svg)](https://github.com/d2foundry/oracle_engine/actions/workflows/foundry.yml)

# Oracle Engine

Oracle Engine is [Foundry](https://d2foundry.gg)'s Rust and WebAssembly based Destiny 2 calculation API, originally forked from the [D2 Calculation API](https://github.com/D2-Insight/D2_Calculation_API). This repo is what holds the weapon formulas, stat calculations, perk info, etc. that we use to display on Foundry.  

This is also where we plan on having our project board for keeping track of our tasks on a lower level. We hope that this will give insight on what we are spending our time on and what is in the near future. 

If you wish to interact with us on a closer basis, our [Discord Server](https://discord.gg/dzW2DZBBQH) is where you can find us and have discussions with like minded guardians. We look forward to seeing you there! 

## Building Oracle Engine for Foundry

Run `cargo build` to install the dependencies required by Oracle Engine. 

In order to build the WebAssembly (wasm) pack you will need to download wasm-pack from this [site](https://rustwasm.github.io/wasm-pack/installer/) or via this cURL command:

`curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh`

Once you have this installed you can build the app via this wasm-pack command.

`wasm-pack build --release --target web`

## Contributing

Looking to help contribute to Foundry? We welcome you to contribute to our project! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) to learn the various ways you can help us. Thank you for having an interest in contributing! 
