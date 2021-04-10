find *.js -type f -print0 -exec dos2unix --keepdate {} +
find *.ts -type f -print0 -exec dos2unix --keepdate {} +
find ./src -type f -print0 -exec dos2unix --keepdate {} +