import subprocess

import shlex

from ..gumazon import __version__


def test_version():
    version_in_pyproject_toml = str(subprocess.run(shlex.split(f"poetry version -s"), capture_output=True).stdout.decode('utf-8').strip())
    assert __version__ == version_in_pyproject_toml
