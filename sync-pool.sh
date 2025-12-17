#!/bin/sh

 # Usage: sync-pool.sh > pool.json

 dirs=("lang" "linux" "dev" "framework" "llm" "person")

 echo "{"

 for i in "${!dirs[@]}"; do

    dir="${dirs[$i]}"
    echo -n "    \"$dir\": ["

    if [ -d "$dir" ]; then

       mapfile -t files < <(find "$dir" -maxdepth 1 -type f -printf "%f\n" | sort)
       file_count=${#files[@]}

       if [ $((file_count % 2)) -eq 1 ] && [ $file_count -gt 0 ]; then

          file_count=$((file_count - 1))

       fi

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

   if [ $i -eq $((${#dirs[@]} - 1)) ]; then

      echo "]"

   else

      echo "],"

   fi

 done

 echo "}"

