#!/bin/bash

# Fix text contrast issues by replacing light gray colors with darker ones
# text-gray-400 -> text-gray-600
# text-gray-500 -> text-gray-700
# text-gray-300 -> text-gray-600 (on dark backgrounds this stays as text-gray-300)

echo "Fixing text contrast issues..."

# Find all TSX and TS files
FILES=$(find /Users/thefortob/Development/ACTIVE-PROJECTS/grok-evolution/nexus-precision-industries/app -name "*.tsx" -o -name "*.ts")

for file in $FILES; do
  # Check if file contains light gray text colors that need fixing
  if grep -q "text-gray-400\|text-gray-500" "$file"; then
    echo "Fixing: $file"
    
    # Create backup
    cp "$file" "$file.bak"
    
    # Replace text-gray-500 with text-gray-700 (darker for better contrast)
    sed -i '' 's/text-gray-500/text-gray-700/g' "$file"
    
    # Replace text-gray-400 with text-gray-600 (darker for better contrast)
    sed -i '' 's/text-gray-400/text-gray-600/g' "$file"
    
    # Special case: Footer component should keep lighter colors since it's on dark background
    if [[ "$file" == *"Footer.tsx"* ]] || [[ "$file" == *"CookieConsent.tsx"* ]]; then
      echo "  Reverting changes for dark background component: $file"
      mv "$file.bak" "$file"
    else
      # Remove backup if changes were successful
      rm "$file.bak"
    fi
  fi
done

echo "Text contrast fixes complete!"