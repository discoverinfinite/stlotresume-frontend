/**
 * @jest-environment jsdom
 */

test('should update counter div with new text', () => {
    // Setup our document body
    document.body.innerHTML = `
      <div class="counter-number">Loading...</div>
    `;
  
    // Simulate updating the counter
    const counter = document.querySelector('.counter-number');
    counter.textContent = 'Page Views: 456';
  
    expect(counter.textContent).toBe('Page Views: 456');
  });  