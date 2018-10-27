const parameters = require('../config/parameters');

class Templates {

    getTemplateHeader(total) {
        let children = '';

        for (let i = 1; i < total; i++) {
            children += "    " + i + ": 1\n";
        }

        return "---\n" +
            "__PAC__EXPORTED__:\n" +
            "  children:\n" +
            children;
    }

    getTemplateBody(id, instance) {
        return id + ":\n" +
            "  KPX title regexp: .*" + instance.name + ".*\n" +
            "  _is_group: 0\n" +
            "  _protected: 0\n" +
            "  auth fallback: 1\n" +
            "  auth type: publickey\n" +
            "  autoreconnect: ''\n" +
            "  autossh: ''\n" +
            "  cluster: []\n" +
            "  description: Connection with " + instance.name + "\n" +
            "  embed: 0\n" +
            "  expect: []\n" +
            "  favourite: 0\n" +
            "  infer from KPX where: 3\n" +
            "  infer user pass from KPX: ''\n" +
            "  ip: " + instance.ip + "\n" +
            "  local after: []\n" +
            "  local before: []\n" +
            "  local connected: []\n" +
            "  mac: ''\n" +
            "  macros: []\n" +
            "  method: SSH\n" +
            "  name: '" + instance.name + "'\n" +
            "  options: ' -X'\n" +
            "  parent: __PAC__EXPORTED__\n" +
            "  pass: ''\n" +
            "  passphrase: ''\n" +
            "  passphrase user: '" + instance.user + "'\n" +
            "  port: 22\n" +
            "  prepend command: ''\n" +
            "  proxy ip: ''\n" +
            "  proxy pass: ''\n" +
            "  proxy port: 8080\n" +
            "  proxy user: ''\n" +
            "  public key: '" + parameters.paths.keys + instance.key + ".pem'\n" +
            "  quote command: ''\n" +
            "  remove control chars: ''\n" +
            "  screenshots: ~\n" +
            "  search pass on KPX: 0\n" +
            "  send slow: 0\n" +
            "  send string active: ''\n" +
            "  send string every: 60\n" +
            "  send string intro: 1\n" +
            "  send string txt: ''\n" +
            "  startup launch: ''\n" +
            "  startup script: ''\n" +
            "  startup script name: sample1.pl\n" +
            "  terminal options:\n" +
            "    audible bell: ''\n" +
            "    back color: '#000000000000'\n" +
            "    bold color: '#cc62cc62cc62'\n" +
            "    bold color like text: 1\n" +
            "    command prompt: '[#%\$>]|\:\/\s*$'\n" +
            "    cursor shape: block\n" +
            "    disable ALT key bindings: ''\n" +
            "    disable CTRL key bindings: ''\n" +
            "    disable SHIFT key bindings: ''\n" +
            "    open in tab: 1\n" +
            "    tab back color: '#000000000000'\n" +
            "    terminal backspace: auto\n" +
            "    terminal character encoding: UTF-8\n" +
            "    terminal emulation: xterm\n" +
            "    terminal font: Monospace 9\n" +
            "    terminal scrollback lines: 5000\n" +
            "    terminal select words: \.:_\/-A-Za-z0-9\n" +
            "    terminal transparency: 0\n" +
            "    terminal window hsize: 800\n" +
            "    terminal window vsize: 600\n" +
            "    text color: '#cc62cc62cc62'\n" +
            "    timeout command: 40\n" +
            "    timeout connect: 40\n" +
            "    use personal settings: ''\n" +
            "    use tab back color: ''\n" +
            "    username prompt: '([l|L]ogin|[u|u]suario|[u|U]ser-?[n|N]ame|[u|U]ser):\s*$'\n" +
            "    visible bell: ''\n" +
            "  title: '" + instance.name + "'\n" +
            "  use prepend command: ''\n" +
            "  use proxy: 0\n" +
            "  use sudo: ''\n" +
            "  user: ''\n" +
            "  variables: []\n"
    }
}

module.exports = new Templates();