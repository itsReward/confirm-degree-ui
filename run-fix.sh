# Fix App.jsx imports
sed -i 's|../contexts/|./contexts/|g' src/App.jsx

# Fix all component imports (2 levels deep from src/)
find src/components -name "*.jsx" -exec sed -i 's|../contexts/|../../contexts/|g' {} \;

# If you have any hook files that need fixing
find src/hooks -name "*.js" -exec sed -i 's|../contexts/|../contexts/|g' {} \;