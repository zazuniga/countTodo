### BEGIN Set zsh prompt to username@hostname ~ %
PROMPT="%n@%m %1~ %# "
### END Set zsh prompt to username@hostname ~ %
### BEGIN SET VSCODE TO BE THE DEFAULT EDITOR
export EDITOR="code -w"
### END SET VSCODE TO BE THE DEFAULT EDITOR
### BEGIN Add common directories to the PATH
export PATH=$HOME/.local/bin:$PATH
### END Add common directories to the PATH
### BEGIN INTIALIZE NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion"
### END INTIALIZE NVM
### BEGIN Add Node directory to the PATH
export PATH="$HOME/.nvm/versions/node:$PATH"
### END Add Node directory to the PATH
### BEGIN INITIALIZE postgresql@15
export PATH="$HOMEBREW_PREFIX/opt/postgresql@15/bin:$PATH"
### END INITIALIZE postgresql@15
