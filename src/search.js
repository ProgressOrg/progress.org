// Add custom CSS to format search autocomplete
setTimeout(() => {
  const autocompleteContainer = document.getElementsByClassName('st-default-autocomplete')[0]
  autocompleteContainer.className = 'st-autocomplete-container'
  const autocompleteResult = document.getElementsByClassName('st-autocomplete-results st-ui-autocomplete')[0]
  autocompleteResult.className = 'st-autocomplete-result'
}, 2000)