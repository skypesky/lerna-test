LATEST_VERSION=$(npm show @blocklet/cli version)
CURRENT_VERSION=1.8.62

echo "CURRENT_VERSION is $CURRENT_VERSION, LATEST_VERSION is $LATEST_VERSION"

# https://www.npmjs.com/package/compare-versions-cli
npm install -g compare-versions-cli
COMPARE=$(compare-versions-cli $CURRENT_VERSION $LATEST_VERSION)


if [ $COMPARE -le 0 ] 
then
    echo "CURRENT_VERSION($CURRENT_VERSION) must > LATEST_VERSION($LATEST_VERSION)"
    exit 1
fi

