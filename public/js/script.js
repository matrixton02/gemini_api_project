let text;

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

    document.getElementById('loading-animation').className = '';
    document.getElementById('answer').innerHTML = `Time Complexity: ${result}`;
  } catch (error) {
    console.error('Error sending text:', error);
  }
};
