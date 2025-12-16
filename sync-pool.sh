#!/bin/sh

# Array of directories to process
dirs=("lang" "linux" "dev" "framework" "llm" "person")

# Start JSON output
echo "{"

# Process each directory
for i in "${!dirs[@]}"; do
    dir="${dirs[$i]}"
    echo -n "    \"$dir\": ["
    
    # Check if directory exists
    if [ -d "$dir" ]; then
        # Get all files (not directories) from the folder, sorted
        mapfile -t files < <(find "$dir" -maxdepth 1 -type f -printf "%f\n" | sort)
        file_count=${#files[@]}
        
        # If file count is odd, reduce by 1 to make it even
        if [ $((file_count % 2)) -eq 1 ] && [ $file_count -gt 0 ]; then
            file_count=$((file_count - 1))
        fi
        
        # Add files to JSON array
        if [ $file_count -gt 0 ]; then
            echo ""
            for j in $(seq 0 $((file_count - 1))); do
                if [ $j -eq $((file_count - 1)) ]; then
                    echo "        \"${files[$j]}\""
                else
                    echo "        \"${files[$j]}\","
                fi
            done
            echo -n "    "
        fi
    fi
    
    # Close the array with or without trailing comma
    if [ $i -eq $((${#dirs[@]} - 1)) ]; then
        echo "]"
    else
        echo "],"
    fi
done

# Close JSON object
echo "}"
