#!/bin/bash
while true; do
    if ! curl -s http://localhost:5001 > /dev/null; then
        echo "$(date): Server down, restarting..."
        pkill -f "http.server 5001"
        cd /home/node/.openclaw/workspace/napoli-centrale/webapp/dist && python3 -m http.server 5001 > ../server_monitor.log 2>&1 &
    fi
    sleep 5
done
