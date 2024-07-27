let text;
function gettext(){
  var text_area = document.getElementById('code');
  text = text_area.value;
  console.log(text);
}
document.getElementById('submit').onclick = async function() {
  gettext();
  try {
    const response = await fetch('http://localhost:3000/send-text', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    });

    const result = await response.text();
    // alert(result);
    document.getElementById('answer').innerHTML = `Time Complexity:${result}`;
  } catch (error) {
    console.error('Error sending text:', error);
  }
};