#!/usr/bin/env sh

# inc_package_json_inc.sh

# The path to directory containing the package.json file as in './ui/gumazon'

PACKAGE_JSON_DIRNAME=${1}


cd ${PACKAGE_JSON_DIRNAME} && npm version patch

