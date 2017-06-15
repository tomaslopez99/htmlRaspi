# Install node v7.x

sudo apt-get remove nodered -q -y --force-yes

sudo apt-get remove nodejs nodejs-legacy -q -y --force-yes

curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -

sudo apt-get install -q -y --force-yes nodejs
