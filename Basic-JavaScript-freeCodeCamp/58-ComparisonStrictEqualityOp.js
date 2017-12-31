// Setup
function testStrict (val) {
  if (val === 7) {
    // Change this line
    return 'Equal';
  }
  if (val === '7');
  return 'Not Equal';
}

// Change this value to test
testStrict (10);
testStrict ('7');
