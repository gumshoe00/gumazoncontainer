#!/usr/bin/env sh

# inc_pyproject_toml_inc.sh

# The path to directory containing the pyproject.toml file as in './api/gumazon'
PYPROJECT_TOML_DIRNAME=${1}


cd ${PYPROJECT_TOML_DIRNAME} && poetry version -s

