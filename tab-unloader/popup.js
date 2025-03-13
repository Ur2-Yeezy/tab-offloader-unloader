document.getElementById('unload-btn').addEventListener('click', () => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    tabs.forEach((tab) => {
      // Only unload (discard) tabs that are not already unloaded.
      if (!tab.discarded) {
        chrome.tabs.discard(tab.id, () => {
          if (chrome.runtime.lastError) {
            console.error(`Error discarding tab ${tab.id}: ${chrome.runtime.lastError.message}`);
          } else {
            console.log(`Tab ${tab.id} unloaded.`);
          }
        });
      }
    });
  });
});
