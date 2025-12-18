#!/bin/sh

 # Usage: sync-pool.sh > pool.json

 IMG_DIR="static/img"

 dirs=("lang" "linux" "dev" "framework" "llm" "person")

 echo "{"

 for i in "${!dirs[@]}"; do

    dir="${dirs[$i]}"
    echo -n "    \"$dir\": ["

    # Check if exists

    if [ -d "$IMG_DIR/$dir" ]; then

       # Mapping files into an array

       mapfile -t files < <(find "$IMG_DIR/$dir" -maxdepth 1 -type f -printf "%f\n" | sort)

       file_count=${#files[@]}

       if [ $((file_count % 2)) -eq 1 ] && [ $file_count -gt 0 ]; then

          file_count=$((file_count - 1))

       fi

       # -gt: Greater than.

       if [ $file_count -gt 0 ]; then

          echo ""

          for j in $(seq 0 $((file_count - 1))); do

             # Prints comma if is the last element.

             if [ $j -eq $((file_count - 1)) ]; then

                echo "        \"${files[$j]}\""

             else

                echo "        \"${files[$j]}\","

             fi

          done

             echo -n "    "

          fi

      fi

   # -eq: Equals.

   if [ $i -eq $((${#dirs[@]} - 1)) ]; then

      echo "]"

   else

      echo "],"

   fi

 done

 echo "}"

