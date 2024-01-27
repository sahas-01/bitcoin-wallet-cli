oclif-btc-wallet
=================


## Requirements:

To build a CLI using nodejs with the following functionalities:

1. Creating a wallet (BIP39 Wallet) ✅

2. Importing a wallet (from BIP39 Mnemonic) ✅

3. Listing all wallets present in storage ✅

4. Getting bitcoin balance of a wallet ✅

5. Getting the list of bitcoin transactions of a wallet ✅

6. Generating an unused bitcoin address for a wallet ✅


oclif example BTC Wallet CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)

<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g btc-wallet
$ btc-wallet COMMAND
running command...
$ btc-wallet (--version)
btc-wallet/0.0.0 win32-x64 node-v18.18.2
$ btc-wallet --help [COMMAND]
```

<!-- usagestop -->
# Commands
<!-- commands -->
* [`btc-wallet hello PERSON`](#btc-wallet-hello-person)
* [`btc-wallet hello world`](#btc-wallet-hello-world)
* [`btc-wallet help [COMMANDS]`](#btc-wallet-help-commands)
* [`btc-wallet plugins`](#btc-wallet-plugins)
* [`btc-wallet plugins:install PLUGIN...`](#btc-wallet-pluginsinstall-plugin)
* [`btc-wallet plugins:inspect PLUGIN...`](#btc-wallet-pluginsinspect-plugin)
* [`btc-wallet plugins:install PLUGIN...`](#btc-wallet-pluginsinstall-plugin-1)
* [`btc-wallet plugins:link PLUGIN`](#btc-wallet-pluginslink-plugin)
* [`btc-wallet plugins:uninstall PLUGIN...`](#btc-wallet-pluginsuninstall-plugin)
* [`btc-wallet plugins reset`](#btc-wallet-plugins-reset)
* [`btc-wallet plugins:uninstall PLUGIN...`](#btc-wallet-pluginsuninstall-plugin-1)
* [`btc-wallet plugins:uninstall PLUGIN...`](#btc-wallet-pluginsuninstall-plugin-2)
* [`btc-wallet plugins update`](#btc-wallet-plugins-update)

## `btc-wallet hello PERSON`

Say hello

```
USAGE
  $ btc-wallet hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/sahas-01/btc-wallet/blob/v0.0.0/src/commands/hello/index.ts)_

## `btc-wallet hello world`

Say hello world

```
USAGE
  $ btc-wallet hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ btc-wallet hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/sahas-01/btc-wallet/blob/v0.0.0/src/commands/hello/world.ts)_

## `btc-wallet help [COMMANDS]`

Display help for btc-wallet.

```
USAGE
  $ btc-wallet help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for btc-wallet.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.0.11/src/commands/help.ts)_

## `btc-wallet plugins`

List installed plugins.

```
USAGE
  $ btc-wallet plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ btc-wallet plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.15/src/commands/plugins/index.ts)_

## `btc-wallet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ btc-wallet plugins add plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ btc-wallet plugins add

EXAMPLES
  $ btc-wallet plugins add myplugin 

  $ btc-wallet plugins add https://github.com/someuser/someplugin

  $ btc-wallet plugins add someuser/someplugin
```

## `btc-wallet plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ btc-wallet plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ btc-wallet plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.15/src/commands/plugins/inspect.ts)_

## `btc-wallet plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ btc-wallet plugins install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -s, --silent   Silences yarn output.
  -v, --verbose  Show verbose yarn output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ btc-wallet plugins add

EXAMPLES
  $ btc-wallet plugins install myplugin 

  $ btc-wallet plugins install https://github.com/someuser/someplugin

  $ btc-wallet plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.15/src/commands/plugins/install.ts)_

## `btc-wallet plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ btc-wallet plugins link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ btc-wallet plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.15/src/commands/plugins/link.ts)_

## `btc-wallet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ btc-wallet plugins remove plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ btc-wallet plugins unlink
  $ btc-wallet plugins remove

EXAMPLES
  $ btc-wallet plugins remove myplugin
```

## `btc-wallet plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ btc-wallet plugins reset
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.15/src/commands/plugins/reset.ts)_

## `btc-wallet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ btc-wallet plugins uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ btc-wallet plugins unlink
  $ btc-wallet plugins remove

EXAMPLES
  $ btc-wallet plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.15/src/commands/plugins/uninstall.ts)_

## `btc-wallet plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ btc-wallet plugins unlink plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ btc-wallet plugins unlink
  $ btc-wallet plugins remove

EXAMPLES
  $ btc-wallet plugins unlink myplugin
```

## `btc-wallet plugins update`

Update installed plugins.

```
USAGE
  $ btc-wallet plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v4.1.15/src/commands/plugins/update.ts)_
<!-- commandsstop -->
* [`oex hello PERSON`](#oex-hello-person)
* [`oex hello world`](#oex-hello-world)
* [`oex help [COMMAND]`](#oex-help-command)
* [`oex plugins`](#oex-plugins)
* [`oex plugins:inspect PLUGIN...`](#oex-pluginsinspect-plugin)
* [`oex plugins:install PLUGIN...`](#oex-pluginsinstall-plugin)
* [`oex plugins:link PLUGIN`](#oex-pluginslink-plugin)
* [`oex plugins:uninstall PLUGIN...`](#oex-pluginsuninstall-plugin)
* [`oex plugins update`](#oex-plugins-update)

## `oex hello PERSON`

Say hello

```
USAGE
  $ oex hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/oclif/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `oex hello world`

Say hello world

```
USAGE
  $ oex hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `oex help [COMMAND]`

Display help for oex.

```
USAGE
  $ oex help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for oex.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `oex plugins`

List installed plugins.

```
USAGE
  $ oex plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ oex plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `oex plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ oex plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ oex plugins:inspect myplugin
```

## `oex plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ oex plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ oex plugins add

EXAMPLES
  $ oex plugins:install myplugin 

  $ oex plugins:install https://github.com/someuser/someplugin

  $ oex plugins:install someuser/someplugin
```

## `oex plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ oex plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ oex plugins:link myplugin
```

## `oex plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ oex plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ oex plugins unlink
  $ oex plugins remove
```

## `oex plugins update`

Update installed plugins.

```
USAGE
  $ oex plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
