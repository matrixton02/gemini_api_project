let text;
let dictionary = {
  "constant": "O(1)",
  "linear": "O(n)",
  "logarithmic": "O(log(n))",
  "quadratic": "O(n^2)",
  "cubic": "O(n^3)",
  "n": "O(n)",
  "log(n)": "O(log(n))",
  "n^2": "O(n^2)",
  "n^3": "O(n^3)",
  "o(1)": "O(1)",
  "o(n)": "O(n)",
  "o(log(n))": "O(log(n))",
  "o(n^2)": "O(n^2)",
  "o(n^3)": "O(n^3)",
  "exponential": "O(2^n)",
  "loglinear": "O(n log(n))",
  "o(n log n)":"O(n log(n))"
};

function gettext() {
  var text_area = document.getElementById('code');
  text = text_area.value.trim().toLowerCase(); // Trim whitespace and convert to lowercase
  console.log(text);
}

document.getElementById('submit').onclick = async function () {
  document.getElementById('answer').innerHTML = "";
  gettext();
  document.getElementById('loading-animation').className = 'loading-2 loading-2--full-height';
  try {
    let api_url = window.location.href + 'send-text';
    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: text })
    });

    let result = await response.text();
    result = result.trim().toLowerCase(); // Normalize the response to match dictionary keys
    console.log(result);

    let complexity = dictionary[result] || "Unknown Time Complexity"; // Default message if no match
    if (complexity === "Unknown Time Complexity") {
      try {
        let complx_url = window.location.href + 'complexity';
        const response = await fetch(complx_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: result })
        });

        complexity = await response.text();

        dictionary[result]=complexity;

      } catch (error) {
        console.error('Error sending text:', error);
      }
    }

    document.getElementById('loading-animation').className = '';
    document.getElementById('answer').innerHTML = `Time Complexity: ${complexity}`;
  } catch (error) {
    console.error('Error sending text:', error);
  }
};
