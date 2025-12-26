#!/bin/bash

# Validate that all posts have either 'public' or 'private' tag
# Outputs errors in VS Code problem matcher format

cd "$(dirname "$0")/.."

for file in _posts/*.md; do
  # Skip files starting with underscore
  if [[ $(basename "$file") == _* ]]; then
    continue
  fi
  
  # Check if file has either 'public' or 'private' tag
  if ! grep -q "tags:.*\(public\|private\)" "$file"; then
    # Get line number of tags line
    LINE=$(grep -n "^tags:" "$file" | cut -d: -f1)
    if [ -z "$LINE" ]; then
      LINE=1
    fi
    
    # Output in format: filepath:line:column: severity: message
    echo "$file:$LINE:1: error: Post must have either 'public' or 'private' tag in the tags array"
  fi
done
