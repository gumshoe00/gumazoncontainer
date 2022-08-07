#!/usr/bin/env sh

# inc_pyproject_toml_inc.sh

# The path to directory containing the pyproject.toml file as in './api/gumazon'
PYPROJECT_TOML_DIRNAME=${1}

# The new version should ideally be a valid semver string or a valid bump rule:
#  patch, minor, major, prepatch, preminor, premajor, prerelease.
SEMVER_STR=${2}

cd ${PYPROJECT_TOML_DIRNAME} && poetry version ${SEMVER_STR}

