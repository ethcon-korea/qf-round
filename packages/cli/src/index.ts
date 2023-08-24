#!/usr/bin/env node
import dotenv from "dotenv"
import { createCommand } from "commander"
import { readLocalJsonFile } from "./lib/files.js"
import {
  auth,
  genkeys,
  doTheThing,
  recover,
  tally
} from "./commands/index.js"

dotenv.config()

const pkg = readLocalJsonFile("../../package.json")

const program = createCommand()

// Entry point.
program.name(pkg.name).description(pkg.description).version(pkg.version)

program
  .command("auth")
  .description(
    "Allow to interact with the blockchain-related commands (e.g., deploy) with a wallet by passing in wallet's mnemonic."
  )
  .argument("<mnemonic>", "the secret mnemonic phrase (e.g., 12 words) separated by spaces")
  .action((mnemonic: string) => {
    auth(mnemonic)
  })

program
  .command("genkeys")
  .description("Generate a new specified amount of MACI and ETH keypairs (QR Codes and csvs included)")
  .argument("<amount>", "amount of MACI and ETH keypairs to be generated")
  .action((amount: number) => {
    genkeys(amount)
  })
  .addHelpCommand(`ethDamCli genkeys 3000`)

program
  .command("dothething")
  .description("Does all the things without user input")
  .argument("<network>", "the network where the contracts has been deployed")
  .action((network: string) => {
    doTheThing(network)
  })

program
  .command("recover")
  .description("continues signups at specified stateindex")
  .argument("<network>", "the network where the contracts has been deployed")
  .action((network: string) => {
    recover(network)
  })
program
  .command("tally")
  .action(
    (

    ) => {
      tally()
    }
  )

program.parseAsync()
