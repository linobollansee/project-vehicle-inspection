// Export the setupCounter function for use in other modules | Exportiere die setupCounter-Funktion zur Verwendung in anderen Modulen
export function setupCounter(element: HTMLButtonElement) {
  // Initialize counter variable to 0 | Initialisiere die Counter-Variable auf 0
  let counter = 0;
  // Define setCounter function to update counter value and display | Definiere setCounter-Funktion zum Aktualisieren des Counter-Werts und der Anzeige
  const setCounter = (count: number) => {
    // Update counter variable with new count | Aktualisiere die Counter-Variable mit dem neuen Wert
    counter = count;
    // Update button's inner HTML to display current count | Aktualisiere das innere HTML des Buttons, um den aktuellen Wert anzuzeigen
    element.innerHTML = `count is ${counter}`;
  };
  // Add click event listener to button that increments counter | Füge dem Button einen Click-Event-Listener hinzu, der den Counter erhöht
  element.addEventListener("click", () => setCounter(counter + 1));
  // Initialize the counter display to 0 | Initialisiere die Counter-Anzeige auf 0
  setCounter(0);
}
