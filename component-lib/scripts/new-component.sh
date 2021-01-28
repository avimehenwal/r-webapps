#!/bin/bash

# AUTHOR      : avimehenwal
# DATE        : 28-Jan-2021
# PURPOSE     : entrypoint script
# FILENAME    : new-component.sh
#
# only writing functional components. Modern react patterns
# @parma: component name
#
# todo: logging, style namecheck on component name

echo -n "Please enter name for new Functional React Component: "
read
echo "creating Functional Component => ${REPLY}"

BASE='./src/components/'
FCN=${REPLY}
CBASE=${BASE}${FCN}

mkdir -p ${CBASE}
FILES=()

# END
