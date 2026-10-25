#!/bin/sh
set -eu

private_paths='(^|/)(profile\.json|pausefill-build-prompt\.md)$'
tracked_paths=$(git ls-files --cached)
staged_paths=$(git diff --cached --name-only --diff-filter=ACMR)

if printf '%s\n%s\n' "$tracked_paths" "$staged_paths" | grep -E "$private_paths"; then
  printf '%s\n' "Error: private profile or build prompt is tracked or staged." >&2
  exit 1
fi