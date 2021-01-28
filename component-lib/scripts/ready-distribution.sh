#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 28-Jan-2021
# PURPOSE     : prepare shippable bundle
# FILENAME    : ready-distribution.sh
#
# Copy ASSETS to distribution directory. Prepare to ship code

echo -e "Reconciling Assets with JS"

for FILE in $(find ./src -type f -not \( -name "*.tsx" \)); do
  DEST=$(echo ${FILE} | sed 's/src/dist/')
  # echo -e "cp -v ${FILE} ${DEST}"
  cp -v ${FILE} ${DEST}
done

# END
