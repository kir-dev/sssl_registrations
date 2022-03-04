#!/bin/bash
set -e

# Remove a potentially pre-existing server.pid for Rails.
rm -f /sssl_reg/tmp/pids/server.pid

# If the database exists, migrate. Otherwise setup (create and migrate)
echo "Running database migrations..."
bundle exec rails db:prepare
echo "Finished running database migrations."

# Then exec the container's main process (what's set as CMD in the Dockerfile).
exec "$@"
