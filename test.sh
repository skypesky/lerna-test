CURRENT_VERSION=$(cat version | awk '{$1=$1;print}')
LATEST_COMMIT_ID=$(git rev-parse --verify HEAD)
COMMIT_HASH=${LATEST_COMMIT_ID:0:8}
BETA_VERSION="${CURRENT_VERSION}-beta-${COMMIT_HASH}"

echo ${BETA_VERSION}