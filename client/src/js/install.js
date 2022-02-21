const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  buttonInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
buttonInstall.addEventListener('click', async () => {
  console.log('tee hee!');
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  promptEvent.prompt();
  window.deferredPrompt = null;
  buttonInstall.classList.toggle('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  
  window.deferredPrompt = null;
}); 
