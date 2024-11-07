// Get modal and its components
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const submitBtn = document.getElementById('submitBtn');

// Open modal when the button is clicked
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  textInput.focus();  // Focus the input box when modal opens
});

// Close modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  textInput.value = '';
  wordCount.textContent = 'Word count: 0 / 300';
});

// Count words and update the word count
textInput.addEventListener('input', () => {
  const words = textInput.value.trim().split(/\s+/).filter(word => word.length > 0);
  
  // If words exceed 300, trim them to 300
  if (words.length > 300) {
    textInput.value = words.slice(0, 300).join(' ');
  }
  
  // Update the word count display
  wordCount.textContent = `Word count: ${words.length} / 300`;
});

// Handle form submission or close modal when 'Submit' is clicked
submitBtn.addEventListener('click', () => {
  if (textInput.value.trim().length === 0) {
    alert('Please enter some text!');
  } else {
    alert(`Submitted: ${textInput.value.slice(0, 100)}...`); // Show first 100 characters
    modal.style.display = 'none';
    textInput.value = '';
    wordCount.textContent = 'Word count: 0 / 300';
  }
});
